pipeline {
  options {
    ansiColor('xterm')
    timeout(time: 1, unit: 'HOURS')
    buildDiscarder(logRotator(numToKeepStr: '10'))
  }

  stages {
    stage('Build') {
      sh 'echo Hello_World'
    }
  }
}
