<?php

/**
 * Plugin Name:       Blox Site
 * Description:       Common Blocks for the site. Main blocks for most of the sections. Site view related blocks in separate plugins.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Arjun Hadke
 * Author URI:		  www.arjunhadke.in
 * Text Domain:       blox-site
 *
 * @package           create-block
 */

// git test new another

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}


require_once __DIR__ . '/build/dyn-intro/render.php'; // Ensure render.php is loaded
require_once __DIR__ . '/build/team/team-wrapper/render.php'; // Ensure render.php is loaded

require_once __DIR__ . '/build/meet-the-team/right-side/grid-maker/team-member/render.php';
//require_once __DIR__ . '/build/meet-the-team/right-side/grid-maker/render.php';
require_once __DIR__ . '/build/meet-the-team/left-side/render.php';

function blox_site_blox_site_block_init()
{
	// Demon's
	register_block_type(__DIR__ . '/build/team');
	register_block_type(__DIR__ . '/build/team/team-wrapper', array(
		'render_callback' => 'render_team_wrapper', // This calls the function from render.php
	));
	register_block_type(__DIR__ . '/build/culture');
	register_block_type(__DIR__ . '/build/culture/culture-item');

	register_block_type(__DIR__ . '/build/values');


	register_block_type(__DIR__ . '/build/dyn-intro', array(
		'render_callback' => 'render_intro_dynamic', // This calls the function from render.php
	));

	//arjun's blocks

	register_block_type(__DIR__ . '/build/meet-the-team');
    register_block_type(__DIR__ . '/build/meet-the-team/right-side');
    register_block_type(__DIR__ . '/build/meet-the-team/right-side/grid-maker');

	register_block_type( __DIR__. '/build/meet-the-team/right-side/grid-maker/team-member', array(
    	'render_callback' => 'render_team_member_block',
	) );

	register_block_type( __DIR__ . '/build/meet-the-team/left-side', array(
		'render_callback' => 'render_meet_team_left_side',
	) );



}
add_action('init', 'blox_site_blox_site_block_init');

