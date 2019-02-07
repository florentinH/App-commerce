import os
import back
import unittest
import tempfile

class FlaskrTestCase(unittest.TestCase):

    def setUp(self):
        self.db_fd, back.app.config['DATABASE'] = tempfile.mkstemp()
        back.app.testing = True
        self.app = back.app.test_client()
        with back.app.app_context():
            back.init_db()
    
    def tearDown(self):
        os.close(self.db_fd)
        os.unlink(back.app.config['DATABASE'])

if __name__ == '__main__':
    unittest.main()