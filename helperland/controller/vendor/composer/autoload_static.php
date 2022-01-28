<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitf3ed92a726dab5388a17e2a3a1840621
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitf3ed92a726dab5388a17e2a3a1840621::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitf3ed92a726dab5388a17e2a3a1840621::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitf3ed92a726dab5388a17e2a3a1840621::$classMap;

        }, null, ClassLoader::class);
    }
}