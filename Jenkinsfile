pipeline {
    agent any

    environment {
        // Replace with your actual Jenkins SSH key credentials ID
        GIT_CREDENTIALS = 'live-cicdkey'
       GIT_REPO = 'https://github.com/anilsahda/ssproject.git'
        GIT_BRANCH = 'master'
    }

    stages {
        stage('Checkout') {
            steps {
                echo "Checking out code from ${GIT_REPO}"
                git branch: "${GIT_BRANCH}", url: "${GIT_REPO}", credentialsId: "${GIT_CREDENTIALS}"
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Installing Node.js dependencies"
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo "Building the React app"
                sh 'npm run build'
            }
        }

        stage('Deploy to Nginx') {
            steps {
                echo "Deploying build files to Nginx web root"
                sh '''
                    sudo rm -rf /var/www/html/*
                    sudo cp -r build/* /var/www/html/
                    sudo systemctl restart nginx
                '''
            }
        }
    }

    post {
        success {
            echo "Deployment completed successfully!"
        }
        failure {
            echo "Deployment failed. Please check the Jenkins logs."
        }
    }
}

