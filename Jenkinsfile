pipeline {
    agent any
    
    environment {
        CI = "false"  // Prevent React from failing on ESLint warnings
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/anilsahda/ssproject.git', credentialsId: 'live-cicdkey'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Installing npm dependencies"
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
                echo "Deploying build to Nginx directory"
                sh '''
                sudo rm -rf /var/www/html/*
                sudo cp -r build/* /var/www/html/
                sudo systemctl restart nginx
                '''

