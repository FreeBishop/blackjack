pipeline {
    agent any

    tools {nodejs "nodejs"}

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh "node -v"
                sh "npm install"
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh "npm run test"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying..'
            }
        }
    }
}