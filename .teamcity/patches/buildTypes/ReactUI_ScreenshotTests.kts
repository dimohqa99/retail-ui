package patches.buildTypes

import jetbrains.buildServer.configs.kotlin.v2018_2.*
import jetbrains.buildServer.configs.kotlin.v2018_2.buildFeatures.commitStatusPublisher
import jetbrains.buildServer.configs.kotlin.v2018_2.failureConditions.BuildFailureOnMetric
import jetbrains.buildServer.configs.kotlin.v2018_2.failureConditions.failOnMetricChange
import jetbrains.buildServer.configs.kotlin.v2018_2.triggers.vcs
import jetbrains.buildServer.configs.kotlin.v2018_2.ui.*

/*
This patch script was generated by TeamCity on settings change in UI.
To apply the patch, change the buildType with id = 'ReactUI_ScreenshotTests'
accordingly, and delete the patch script.
*/
changeBuildType(RelativeId("ReactUI_ScreenshotTests")) {
    triggers {
        remove {
            vcs {
                branchFilter = "+:pull/*"
            }
        }
    }

    failureConditions {
        add {
            failOnMetricChange {
                metric = BuildFailureOnMetric.MetricType.BUILD_DURATION
                threshold = 3600
                units = BuildFailureOnMetric.MetricUnit.DEFAULT_UNIT
                comparison = BuildFailureOnMetric.MetricComparison.MORE
                compareTo = value()
                stopBuildOnFailure = true
                param("anchorBuild", "lastSuccessful")
            }
        }
    }

    features {
        remove {
            commitStatusPublisher {
                publisher = github {
                    githubUrl = "https://api.github.com"
                    authType = personalToken {
                        token = "credentialsJSON:37119025-2749-4abf-8ed8-ff4221b59d50"
                    }
                }
                param("github_oauth_user", "wKich")
            }
        }
    }
}
