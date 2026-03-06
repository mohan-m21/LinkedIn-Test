pipeline {

    agent any

    stages {

        stage('Git Checkout') {
            steps {
                git branch: 'main',
                url: 'https://github.com/mohan-m21/LinkedIn-Test.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t linkedin_test .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker stop linkedin-container || true'
                sh 'docker rm linkedin-container || true'
                sh 'docker run -d -p 3131:3000 --name linkedin-container linkedin_test'
            }
        }

    }

}
