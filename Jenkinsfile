pipeline {
  agent any
  stages {
    stage('Build') {
      when {
        allOf {
          expression {env.CHANGE_ID != null}
          branch '!master'
        }
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
