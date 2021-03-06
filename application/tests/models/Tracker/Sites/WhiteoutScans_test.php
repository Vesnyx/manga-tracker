<?php

/**
 * @coversDefaultClass WhiteoutScans
 * @group FoolSlide
 */
class WhiteoutScans_test extends SiteTestCase {
	public function test_success() {
		//WhiteoutScans only appears to translate ReLife?
		$testSeries = [
			'relife' => 'ReLIFE'
		];
		$this->_testSiteSuccessRandom($testSeries);
	}
	public function test_failure() {
		$this->_testSiteFailure('Bad Status Code (404)');
	}

	public function test_custom() {
		$this->_testSiteCustom();
	}
}
