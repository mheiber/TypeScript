node('GNRLD') {
    stage('checkout') {
        deleteDir()
        checkout scm
    }

    stage('install') {
        sh '''
        npm config set "always-auth" "false";
        npm config set "registry" "http://artprod.dev.bloomberg.com:8080/artifactory/api/npm/npm-repos";
        npm config set "strict-ssl" "false";
        npm i --ignore-scripts -s;
        npm run build
        '''
    }

    stage('lint') {
        sh "npm run lint"
    }

    stage('test') {
        sh "npm run test"
    }
}

