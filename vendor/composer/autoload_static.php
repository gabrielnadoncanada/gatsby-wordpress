<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInita043a7076fc6a729f16be716e4a68f81
{
    public static $prefixLengthsPsr4 = array (
        't' => 
        array (
            'taskmanager\\' => 12,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'taskmanager\\' => 
        array (
            0 => __DIR__ . '/../..' . '/classes',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInita043a7076fc6a729f16be716e4a68f81::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInita043a7076fc6a729f16be716e4a68f81::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
