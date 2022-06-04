/*
0) Inicializace nového REACT v18 projektu:
Kód níže nainstaluje nejaktuálnější verzi reactu:
    npx create-react-app "my-netflix"

A1) Instalace a používání SASS - náhrada stylizace za CSS
a) npm add sass
b) Vytvoříme nový soubor app.scss (SASS soubor).
c) Nadefinujeme si hlavní barvy v "app.scss" jako proměnné - k těmto uloženým barvám budeme přistupovat ve všech komponentách.
    - Vytvoříme si proměnnou "main-color" uvnitř root (root je přístupný všude) - viz níže: */
        :root{
            --main-color: #0b0b0b
        }/*
d) K této proměnné "main-color" budeme přistupovat uvnitř "home.scss" souboru pro "Home.jsx"

B1) Instalace a použití Material-UI ikon (od v18)
a) npm install @mui/material @emotion/react @emotion/styled --legacy-peer-deps
b) npm install @mui/icons-material --legacy-peer-deps

