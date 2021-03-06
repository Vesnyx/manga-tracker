<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Migration_Setup_Signup_Verification extends CI_Migration {
	public function __construct() {
		parent::__construct();
		$this->load->dbforge();
	}

	public function up() {
		// Table structure for table 'auth_signup_validation'
		$this->dbforge->add_field(array(
			'email' => array(
				'type'       => 'VARCHAR',
				'constraint' => '254'
			),
			'verification_code' => array(
				'type'       => 'VARCHAR',
				'constraint' => '40'
			),
			'verification_code_time' => array(
				'type'       => 'INT',
				'constraint' => '11',
				'unsigned'   => TRUE
			)
		));
		$this->dbforge->add_key('email', TRUE);
		$this->dbforge->create_table('auth_signup_verification');
	}

	public function down()
	{
		$this->dbforge->drop_table('auth_signup_verification', TRUE);
	}
}
