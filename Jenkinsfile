pipeline {
  agent any
  stages {
    stage('Build') {
      when {
        expression {env.CHANGE_ID != null}
      }
      steps {
        sh 'echo Hello_World'
        sh 'echo $GIT_URL'
        sh 'echo $ghprbPullId'
        sh 'echo $CHANGE_ID'
      }
    }
  }
}
