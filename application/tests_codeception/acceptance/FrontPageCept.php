<?php
	$I = new AcceptanceTester($scenario);

	$I->wantTo('Check the Front Page works (No login)');
	$I->amOnPage('/');
	$I->see('FRONT PAGE');
	$I->see('©2016 tracker.codeanimu.net');

	$I->seeLink('Login');
	$I->seeLink('Register');

	$I->seeInTitle('Manga Tracker - Index');

