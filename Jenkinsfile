pipeline {
  environment {
    SONAR_BRANCH_NAME = env.BRANCH_NAME.replace("/","-")
  }
  agent any
  stages {
    stage('Build') {
      when {
        allOf {
          expression {!(env.BRANCH_NAME ==~ /(master|staging)/)}
          expression {env.CHANGE_ID != null}
        }
      }
      steps {
        sh 'echo Hello_World'
        sh 'echo $GIT_URL'
        sh 'echo $ghprbPullId'
        sh 'echo $SONAR_BRANCH_NAME'
      }
    }
  }
}
