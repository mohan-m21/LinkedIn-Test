pipeline {

    agent any

    environment {
        IMAGE_NAME = "imohan21/linkedin_test"
        IMAGE_TAG = "${BUILD_NUMBER}"
    }
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
        stage(' Push Image into DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'Mohan_GitHub', passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')]) {
                sh "docker push ${IMAGE_NAME}:${IMAGE_TAG}"
                sh "docker push ${IMAGE_NAME}:latest"
}
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
