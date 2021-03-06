<?php

/**
 * @coversDefaultClass GameOfScanlation
 */
class GameOfScanlation_test extends SiteTestCase {
	public function test_success() {
		$this->skipTravis('Travis\'s PHP Curl ver. doesn\'t seem to play nice with SSL.');

		$testSeries = [
			'legendary-moonlight-sculptor.99' => 'Legendary Moonlight Sculptor',
			'skill-of-lure'                   => 'Skill of Lure',
			'here-comes-the-fiancee.105'      => 'Here comes the Fiancee!',
			'balls-friend'                    => 'Balls Friend',
			'pride-complex'                   => 'Pride Complex'
		];
		$this->_testSiteSuccessRandom($testSeries);
	}
	public function test_failure() {
		$this->skipTravis('Travis\'s PHP Curl ver. doesn\'t seem to play nice with SSL.');

		$this->_testSiteFailure('Bad Status Code (404)');
	}
}
