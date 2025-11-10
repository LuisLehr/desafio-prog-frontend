@echo off
echo.
echo INICIANDO SISTEMA DE MATRÍCULAS - UNISINOS
echo.
start "BACKEND" cmd /k "cd backend && node server.js"
timeout /t 3 >nul
start "FRONTEND" cmd /k "npx http-server public -p 8080 --cors -o"
echo.
echo PRONTO! O navegador abriu automaticamente.
echo Deixe as duas janelas abertas!
pause