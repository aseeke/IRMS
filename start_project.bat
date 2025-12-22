@echo off
setlocal

echo ==========================================
echo       IRMS Startup Script for Windows
echo ==========================================

:: check mysql
where mysql >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] MySQL is not in your PATH. Please ensure MySQL is installed and added to PATH.
    echo Please manually create database 'irms' and import 'irms.sql'.
    pause
    exit /b
)

echo.
echo [1/3] Database Initialization Check...
echo Attempts to create database 'irms' and import 'irms.sql'...
echo NOTE: Assuming root password is empty or you will be prompted.
echo If you have a root password, the script might pause for input or fail if not interactive in this way.
echo.

:: Try to create database and import if not exists. 
:: Using a simple check: try to use the db.
mysql -u root -proot123456 -e "USE irms" 2>nul
if %errorlevel% neq 0 (
    echo Database 'irms' does not exist. Creating and importing...
    mysql -u root -proot123456 -e "CREATE DATABASE irms CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;"
    if %errorlevel% neq 0 (
        echo [ERROR] Failed to create database. Please check your MySQL credentials.
        echo You might need to edit this script to add -pPASSWORD
        pause
        exit /b
    )
    mysql -u root -proot123456 irms < irms.sql
    if %errorlevel% neq 0 (
        echo [ERROR] Failed to import irms.sql.
        pause
        exit /b
    )
    echo Database initialized successfully.
) else (
    echo Database 'irms' already exists. Skipping import.
)

echo.
echo [2/3] Starting Backend (Spring Boot)...
start "IRMS Backend" cmd /c "cd backend && mvn spring-boot:run"

echo.
echo [3/3] Starting Frontend (Vue 3)...
start "IRMS Frontend" cmd /c "cd frontend && npm install && npm run dev"

echo.
echo ==========================================
echo Services are starting in new windows.
echo Backend URL: http://localhost:8080/swagger-ui.html
echo Frontend URL: http://localhost:5173
echo ==========================================
echo All done! You can close this window.
pause
