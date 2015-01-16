<?php

/*
 |-----------------------------------------------------------------------------
 | App Routes
 |-----------------------------------------------------------------------------
 |
 | For better organization, routes are divided and organized as separate files
 | in the the app/Routes folder. Define the application routes there.
 | This file does not have to be modified.
 |
 */

foreach (File::allFiles(__DIR__ . '/Routes') as $routeFile) {
    require_once $routeFile->getPathname();
}
