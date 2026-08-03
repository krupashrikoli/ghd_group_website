<?php
if (!defined('ABSPATH')) { exit; }

function ghd_group_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo', array(
        'height' => 180,
        'width' => 460,
        'flex-height' => true,
        'flex-width' => true,
    ));
}
add_action('after_setup_theme', 'ghd_group_theme_setup');

function ghd_group_enqueue_assets() {
    wp_enqueue_style('ghd-google-fonts', 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;700;800;900&display=swap', array(), null);
    wp_enqueue_style('ghd-group-style', get_stylesheet_uri(), array('ghd-google-fonts'), '1.0.0');
}
add_action('wp_enqueue_scripts', 'ghd_group_enqueue_assets');
