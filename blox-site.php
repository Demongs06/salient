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

function blox_site_blox_site_block_init()
{
	// CTA Block
	register_block_type(__DIR__ . '/build/cta');
	register_block_type(__DIR__ . '/build/cta/cta-button');
	register_block_type(__DIR__ . '/build/cta/cta-button-icon');
	register_block_type(__DIR__ . '/build/cta/cta-link');



	// New Blocks for NFPC Website

	// Intro Block - Home page
	register_block_type(__DIR__ . '/build/intro-nfpc');


	// Other blocks from other site

	// Listing a technology's solution
	register_block_type(__DIR__ . '/build/sharepoint-solutions');
	register_block_type(__DIR__ . '/build/sharepoint-solutions/single-solution');
	// Listing their services
	register_block_type(__DIR__ . '/build/our-services');
	register_block_type(__DIR__ . '/build/our-services/single-service');

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
}
add_action('init', 'blox_site_blox_site_block_init');



function tt3child_register_acf_blocks() {
    register_block_type( __DIR__ . '/build/acf-testimonial' );
   
}
// Here we call our tt3child_register_acf_block() function on init.
add_action( 'init', 'tt3child_register_acf_blocks' );




// Arjun's Blocks
	//render
	require_once __DIR__ . '/build/meet-the-team/left-side/render.php';
	require_once __DIR__ . '/build/meet-the-team/right-side/render.php';
	require_once __DIR__ . '/build/meet-the-team/right-side/grid-maker/render.php';
	require_once __DIR__ . '/build/meet-the-team/right-side/grid-maker/team-member/render.php';


	function blox_site_block_init()
{
	register_block_type( __DIR__. '/build/meet-the-team' );

	register_block_type(__DIR__ . '/build/meet-the-team/left-side', array(
        'render_callback' => 'render_meet_the_team_left_section',
    ));

	register_block_type(__DIR__ . '/build/meet-the-team/right-side', array(
        'render_callback' => 'render_meet_the_team_right_section',
    ));

	register_block_type(__DIR__ . '/build/meet-the-team/right-side/grid-maker', array(
        'render_callback' => 'render_grid_maker_block',
    ));

	register_block_type(__DIR__ . '/build/meet-the-team/right-side/grid-maker/team-member', array(
        'render_callback' => 'render_team-member_block',
    ));

	require_once __DIR__ . '/build/dyn-intro/render.php'; // Ensure render.php is loaded
    register_block_type(__DIR__ . '/build/dyn-intro', array(
        'render_callback' => 'render_intro_dynamic', // This calls the function from render.php
    ));

	}
add_action('init', 'blox_site_block_init');