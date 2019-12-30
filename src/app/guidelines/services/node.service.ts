import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {TreeNode} from 'primeng/api';
// import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})export class NodeService {

  constructor(private http: HttpClient) { }

  response = {
    data: [
      {
        expandedIcon: 'fa fa-folder-open',
        collapsedIcon: 'fa fa-folder',
        label: 'New functionality',
        data: 'newFeature',
        tags: ['Frontend', 'Backend'],
        children: [
          {
            icon: 'fa fa-file-word-o',
            label: `How will users <b>discover</b> new functionality?`,
            data: 'featureDiscovery',
            extraInfo: 'More info here'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'What analytics should be collected to validate success?',
            data: 'analytics'
          }
        ]
      },
      {
        expandedIcon: 'fa fa-folder-open',
        collapsedIcon: 'fa fa-folder',
        label: 'Removal or modification of existing functionality',
        data: 'existingFeature',
        children: [
          {
            icon: 'fa fa-file-word-o',
            label: 'How will users find out about the change?',
            data: 'featureDiscoveryForModified'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'How do you know you didn\'t make it worse?',
            data: 'existingFeatureHaveNotMadeItWorse'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'It has upgrade task',
            data: 'upgradeTask'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'It includes some refactoring...',
            data: 'itRefactors'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Is it backward compatible?',
            data: 'compatibility'
          }
        ]
      },
      {
        expandedIcon: 'fa fa-folder-open',
        collapsedIcon: 'fa fa-folder',
        label: 'Harvested feature',
        data: 'harvestedFeature',
        children: [
          {
            icon: 'fa fa-file-word-o',
            label: 'Cloud to Server',
            data: 'cloudToServer'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Server to Cloud',
            data: 'serverToCloud'
          }
        ]
      },
      {
        expandedIcon: 'fa fa-folder-open',
        collapsedIcon: 'fa fa-folder',
        label: 'Common risks',
        data: 'commonRisks',
        children: [
          {
            icon: 'fa fa-file-word-o',
            label: 'Can it be turned off when it misbehaves?',
            data: 'canItBeTurnedOff'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'When this feature fails what else will fail?',
            data: 'whatElseWillFail'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'What\'s your tested recovery plan?',
            data: 'testedRecoveryPlan'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Does it have good usability?',
            data: 'usability'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Works well in different languages/locales?',
            data: 'localisation'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Would it be affected by product license?',
            data: 'license'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Will it affect add-on developers?',
            data: 'extensibility'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Should documentation be updated?',
            data: 'documentation'
          }
        ]
      },
      {
        expandedIcon: 'fa fa-folder-open',
        collapsedIcon: 'fa fa-folder',
        label: 'It has data input',
        data: 'itHasInput',
        children: [
          {
            icon: 'fa fa-file-word-o',
            label: 'How will users know what\'s mandatory?',
            data: 'mandatoryInput'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Will it handle empty input?',
            data: 'emptyInput'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Will it handle large input? Is there a limit?',
            data: 'largeInput'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Will it handle invalid input?',
            data: 'inputValidation'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Is it forgiving of user input mistakes?',
            data: 'forgivingInput'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Is it protected from malicious input?',
            data: 'maliciousInput'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Who has permission for input? Can anonymous do that?',
            data: 'inputPermissions'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'What if it failed to process input?',
            data: 'failedOnInput'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Input via UI',
            data: 'inputViaUi'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Consider input from other features and via API/REST',
            data: 'inputViaAPI'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Does it use and check CSRF tokens?',
            data: 'requestForgery'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Does it escape all output by default?',
            data: 'xssPrevention'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Does it use dangerous (de)serialization methods?',
            data: 'serialization'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Does it use DBO prepared statements?',
            data: 'sqli'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'It can send the requests to any URL or any server specified user input',
            data: 'itSendRequest'
          },
          {
            icon: 'fa fa-file-word-o',
            label: `Does it execute shell commands?`,
            data: 'commandInjection',
            extraInfo: `
              <p> <span> Execution of shell command can be dangerous if user input is used as one of command argument </span>
              <p> <a href="https://jira.atlassian.com/browse/BAM-13220">Example</a>
              `
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'It reads a file or a file name from user input',
            data: 'itReadFile'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'What input does it not consider to be trusted?',
            data: 'nonTrustedInput'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Does it evaluate code from user input? For example: eval(), assert and (), etc.',
            data: 'codeEval'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Does it allow input via URL or HTTP parameters?',
            data: 'inputViaURL'
          }
        ]
      },
      {
        expandedIcon: 'fa fa-folder-open',
        collapsedIcon: 'fa fa-folder',
        label: 'It has data output',
        data: 'itHasOutput',
        children: [
          {
            icon: 'fa fa-file-word-o',
            label: 'What if no data to return/display?',
            data: 'noOutput'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'What if data is incomplete?',
            data: 'incompleteOutput'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'What if there is a lot of data to return/display?',
            data: 'hugeOutput'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Possible to sort/filter/limit output?',
            data: 'sortFilterLimitOutput'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'What if it failed to return/display data?',
            data: 'failedToOutput'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'What if it takes time to return/display result?',
            data: 'takesLongToOutput'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Should it be cached?',
            data: 'cachedOutput'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Can result be stale or invalid?',
            data: 'staleOutput'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Who can access data? Can anonymous see it?',
            data: 'outputAccessRights'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Leaking sensitive data?',
            data: 'leakingSensitieveData'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'What if there\'s malicious output?',
            data: 'maliciousOutput'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Does it handle exceptions and stacktrace in a secure way?',
            data: 'errorHandling'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Does it disclose internal or user information?',
            data: 'informationDisclouse'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'It sets the "Access-Control-Allow-Origin" header',
            data: 'ItUseCors'
          }
        ]
      },
      {
        expandedIcon: 'fa fa-folder-open',
        collapsedIcon: 'fa fa-folder',
        label: 'It does processing',
        data: 'itDoesProcessing',
        children: [
          {
            icon: 'fa fa-file-word-o',
            label: 'What if it takes time to process?',
            data: 'tooLongToProcess'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'What if it was interrupted?',
            data: 'whatIfProcessingInterrupted'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'What if it failed?',
            data: 'whatIfProcessingFailed'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Is it idempotent?',
            data: 'processIdempotency'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Can it be too much to process?',
            data: 'tooMuchProcessing'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Will it handle concurrency?',
            data: 'concurrentProcessing'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Will it handle exhausted system resources (cpu, network, memory, disk space)?',
            data: 'lackOfResources'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Can user configure how processing done?',
            data: 'processingConfiguration'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Who has permissions to trigger it? Can anonymous do it?',
            data: 'processingPermissions'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'It processes XML',
            data: 'itProcessXml'
          }
        ]
      },
      {
        expandedIcon: 'fa fa-folder-open',
        collapsedIcon: 'fa fa-folder',
        label: 'It stores data',
        data: 'itStoresData',
        children: [
          {
            icon: 'fa fa-file-word-o',
            label: 'What if it failed to store?',
            data: 'storageFailed'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Will it work equally well on different platforms?',
            data: 'storagePlatform'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Should that data be backupable/exportable?',
            data: 'storageBackup'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Should that data be versioned?',
            data: 'storageVersioning'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Is data stored in a secure way?',
            data: 'storageSecurity'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Is data synced between multiple places?',
            data: 'storageSyncing'
          }
        ]
      },
      {
        expandedIcon: 'fa fa-folder-open',
        collapsedIcon: 'fa fa-folder',
        label: 'It notifies someone',
        data: 'itNotifiesSomeone',
        children: [
          {
            icon: 'fa fa-file-word-o',
            label: 'What if notification channel is not configured?',
            data: 'notificationNotConfigured'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'What if notification failed?',
            data: 'notificationFailed'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Does it respect permissions and notification preferences?',
            data: 'notificationPermissions'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Notification via email',
            data: 'notifyViaEmail'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Notification via HipChat',
            data: 'notifyViaHC'
          }
        ]
      },
      {
        expandedIcon: 'fa fa-folder-open',
        collapsedIcon: 'fa fa-folder',
        label: 'It has dependency on another system',
        data: 'itIntegratesWithAnotherSystem',
        children: [
          {
            icon: 'fa fa-file-word-o',
            label: 'What if dependency is unavailable, misconfigured, or of wrong version?',
            data: 'unavailableDependency'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'What if dependency is slow to respond?',
            data: 'slowDependency'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Integration via Applinks',
            data: 'runsOnApplinks'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Will it make too many requests to another system?',
            data: 'rateLimiting'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Does it send customer data to third-party vendors?',
            data: 'third-partyVendor'
          }
        ]
      },
      {
        expandedIcon: 'fa fa-folder-open',
        collapsedIcon: 'fa fa-folder',
        label: 'It uses Dark Feature',
        data: 'darkFeatureRisks',
        children: [
          {
            icon: 'fa fa-file-word-o',
            label: 'What is available when the Dark Feature is enabled/disabled?',
            data: 'dfEnableDisable'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Does the dark feature modify any state in the database or filesystem irrespective of being darkened / lightened?',
            data: 'dfModifyState'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Does the dark feature toggle all of the related code paths like event hooks, service restart handlers, upgrade/downgrade tasks etc.?',
            data: 'dfCodePath'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'What happen when the Dark Feature is disabled after being enabled for several days?',
            data: 'dfDisabledAfterDays'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'What happen when the Dark Feature is enabled after being disabled for several days?',
            data: 'dfEnabledAfterDays'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Is the Dark Feature enabled for just a group of users?',
            data: 'dfGroupOfUsers'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'What happens when the feature flag is always turned on by default, upgrade task/new instances etc.?',
            data: 'dfEnableFlagDefault'
          }
        ]
      },
      {
        expandedIcon: 'fa fa-folder-open',
        collapsedIcon: 'fa fa-folder',
        label: 'It runs...',
        data: 'itRuns',
        children: [
          {
            icon: 'fa fa-file-word-o',
            label: 'In a Microservice',
            data: 'microservice'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'In the browser',
            data: 'runsInBrowser'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'On the backend',
            data: 'runsOnBackend'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'On mobile',
            data: 'runsOnMobile'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'In the native client',
            data: 'runsInNativeClient'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Will it work in a low spec environment?',
            data: 'runsInLowSpec'
          }
        ]
      },
      {
        expandedIcon: 'fa fa-folder-open',
        collapsedIcon: 'fa fa-folder',
        label: 'It requires external libraries...',
        data: 'itDepends',
        children: [
          {
            icon: 'fa fa-file-word-o',
            label: 'Are the new library versions compatible?',
            data: 'libVersions'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Is the library already used for other purposes in the product?',
            data: 'libAlreadyUsed'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Do the new libraries contain known vulnerabilities?',
            data: 'libVuln'
          }
        ]
      },
      {
        expandedIcon: 'fa fa-folder-open',
        collapsedIcon: 'fa fa-folder',
        label: 'Product specific risks',
        data: 'productSpecificRisks',
        children: [
          {
            icon: 'fa fa-file-word-o',
            label: 'HipChat',
            data: 'hipchat'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Confluence',
            data: 'confluence'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Bitbucket Cloud',
            data: 'bitbucket'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Bitbucket Server',
            data: 'bbs'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Bamboo',
            data: 'bamboo'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Connect',
            data: 'connect'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'JIRA Software',
            data: 'jsw'
          }
        ]
      },
      {
        expandedIcon: 'fa fa-folder-open',
        collapsedIcon: 'fa fa-folder',
        label: 'Infrastructure specific risks',
        data: 'infrastructureSpecificRisks',
        children: [
          {
            icon: 'fa fa-file-word-o',
            label: 'AWS',
            data: 'AWS'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'MS Azure',
            data: 'Azure'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Internet Protocol',
            data: 'IP'
          }
        ]
      },
      {
        expandedIcon: 'fa fa-folder-open',
        collapsedIcon: 'fa fa-folder',
        label: 'Security risks',
        data: 'securityRisk',
        children: [
          {
            icon: 'fa fa-file-word-o',
            label: 'Does it carry out operations which may cause exhaustion of disk space, memory or network connectivity?',
            data: 'dos'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Does it follow the Privacy Policy',
            data: 'privacyPolicy'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'What are abuse cases by a malicious user?',
            data: 'abuse'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Does it perform application logging according to the standard?',
            data: 'logging'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Does it set security headers?',
            data: 'securityHeader'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Does it allow enumeration of user information?',
            data: 'enumeration'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'It uses keys and/or secrets',
            data: 'itHasSecret'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Does it rate limit user requests (such as login attempts)?',
            data: 'throttle'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Can it redirect to an arbitrary URL?',
            data: 'openRedirect'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'It uses encryption',
            data: 'itEncrypt'
          }
        ]
      },
      {
        expandedIcon: 'fa fa-folder-open',
        collapsedIcon: 'fa fa-folder',
        label: 'Privacy considerations',
        data: 'privacy',
        children: [
          {
            icon: 'fa fa-file-word-o',
            label: 'Does it store, collect or display any Personally Identifiable Information (PII)?',
            data: 'storesPII'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Does it change which users or groups can access Personally Identifiable Information (PII)?',
            data: 'accessToPII'
          }
        ]
      },
      {
        expandedIcon: 'fa fa-folder-open',
        collapsedIcon: 'fa fa-folder',
        label: 'Frontend Specific',
        data: 'frontendSpecific',
        children: [
          {
            icon: 'fa fa-file-word-o',
            label: 'QA demo with design/PM',
            data: 'qaDemoWithDesignPM'
          },
          {
            icon: 'fa fa-file-word-o',
            label: 'Does the console spew errors or warnings?',
            data: 'errors'
          }
        ]
      }
    ]
  };


  getGuidelineNodes() {
    // return of(this.response.data).toPromise();
    return this.http.get<any>('assets/data/guidelines.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
  }
}
