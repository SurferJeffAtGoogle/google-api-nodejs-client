// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  BaseExternalAccountClient,
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace batch_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | BaseExternalAccountClient
      | GoogleAuth;

    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Batch API
   *
   * An API to manage the running of batch jobs on Google Cloud Platform.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const batch = google.batch('v1');
   * ```
   */
  export class Batch {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Accelerator describes Compute Engine accelerators to be attached to the VM.
   */
  export interface Schema$Accelerator {
    /**
     * The number of accelerators of this type.
     */
    count?: string | null;
    /**
     * Deprecated: please use instances[0].install_gpu_drivers instead.
     */
    installGpuDrivers?: boolean | null;
    /**
     * The accelerator type. For example, "nvidia-tesla-t4". See `gcloud compute accelerator-types list`.
     */
    type?: string | null;
  }
  /**
   * Conditions for actions to deal with task failures.
   */
  export interface Schema$ActionCondition {
    /**
     * Exit codes of a task execution. If there are more than 1 exit codes, when task executes with any of the exit code in the list, the condition is met and the action will be executed.
     */
    exitCodes?: number[] | null;
  }
  /**
   * VM Agent Info.
   */
  export interface Schema$AgentInfo {
    /**
     * The assigned Job ID
     */
    jobId?: string | null;
    /**
     * When the AgentInfo is generated.
     */
    reportTime?: string | null;
    /**
     * Agent state.
     */
    state?: string | null;
    /**
     * The assigned task group ID.
     */
    taskGroupId?: string | null;
    /**
     * Task Info.
     */
    tasks?: Schema$AgentTaskInfo[];
  }
  /**
   * VM Agent Metadata.
   */
  export interface Schema$AgentMetadata {
    /**
     * When the VM agent started. Use agent_startup_time instead.
     */
    creationTime?: string | null;
    /**
     * Full name of the entity that created this vm. For MIG, this path is: projects/{project\}/regions/{region\}/InstanceGroupManagers/{igm\} The value is retrieved from the vm metadata key of "created-by".
     */
    creator?: string | null;
    /**
     * image version for the VM that this agent is installed on.
     */
    imageVersion?: string | null;
    /**
     * GCP instance name (go/instance-name).
     */
    instance?: string | null;
    /**
     * GCP instance ID (go/instance-id).
     */
    instanceId?: string | null;
    /**
     * If the GCP instance has received preemption notice.
     */
    instancePreemptionNoticeReceived?: boolean | null;
    /**
     * parsed contents of /etc/os-release
     */
    osRelease?: {[key: string]: string} | null;
    /**
     * agent binary version running on VM
     */
    version?: string | null;
    /**
     * Agent zone.
     */
    zone?: string | null;
  }
  /**
   * TODO(b/182501497) The message needs to be redefined when the Agent API server updates data in storage per the backend design.
   */
  export interface Schema$AgentTask {
    /**
     * The intended state of the task.
     */
    intendedState?: string | null;
    /**
     * The highest barrier reached by all tasks in the task's TaskGroup.
     */
    reachedBarrier?: string | null;
    /**
     * Task Spec.
     */
    spec?: Schema$TaskSpec;
    /**
     * Task status.
     */
    status?: Schema$TaskStatus;
    /**
     * Task name.
     */
    task?: string | null;
  }
  /**
   * Task Info
   */
  export interface Schema$AgentTaskInfo {
    /**
     * The highest index of a runnable started by the agent for this task. The runnables are indexed from 1. Value 0 is undefined.
     */
    runnable?: string | null;
    /**
     * ID of the Task
     */
    taskId?: string | null;
    /**
     * The status of the Task. If we need agent specific fields we should fork the public TaskStatus into an agent specific one. Or add them below.
     */
    taskStatus?: Schema$TaskStatus;
  }
  /**
   * VM timing information
   */
  export interface Schema$AgentTimingInfo {
    /**
     * Agent startup time
     */
    agentStartupTime?: string | null;
    /**
     * Boot timestamp of the VM OS
     */
    bootTime?: string | null;
    /**
     * Startup time of the Batch VM script.
     */
    scriptStartupTime?: string | null;
  }
  /**
   * A Job's resource allocation policy describes when, where, and how compute resources should be allocated for the Job.
   */
  export interface Schema$AllocationPolicy {
    /**
     * Describe instances that can be created by this AllocationPolicy. Only instances[0] is supported now.
     */
    instances?: Schema$InstancePolicyOrTemplate[];
    /**
     * Labels applied to all VM instances and other resources created by AllocationPolicy. Labels could be user provided or system generated. You can assign up to 64 labels. [Google Compute Engine label restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) apply. Label names that start with "goog-" or "google-" are reserved.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Location where compute resources should be allocated for the Job.
     */
    location?: Schema$LocationPolicy;
    /**
     * The network policy.
     */
    network?: Schema$NetworkPolicy;
    /**
     * Service account that VMs will run as.
     */
    serviceAccount?: Schema$ServiceAccount;
  }
  /**
   * A new or an existing persistent disk (PD) or a local ssd attached to a VM instance.
   */
  export interface Schema$AttachedDisk {
    /**
     * Device name that the guest operating system will see. It is used by Runnable.volumes field to mount disks. So please specify the device_name if you want Batch to help mount the disk, and it should match the device_name field in volumes.
     */
    deviceName?: string | null;
    /**
     * Name of an existing PD.
     */
    existingDisk?: string | null;
    newDisk?: Schema$Disk;
  }
  /**
   * Barrier runnable blocks until all tasks in a taskgroup reach it.
   */
  export interface Schema$Barrier {
    /**
     * Barriers are identified by their index in runnable list. Names are not required, but if present should be an identifier.
     */
    name?: string | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * Compute resource requirements
   */
  export interface Schema$ComputeResource {
    /**
     * Extra boot disk size in MiB for each task.
     */
    bootDiskMib?: string | null;
    /**
     * The milliCPU count.
     */
    cpuMilli?: string | null;
    /**
     * Memory in MiB.
     */
    memoryMib?: string | null;
  }
  /**
   * Container runnable.
   */
  export interface Schema$Container {
    /**
     * If set to true, external network access to and from container will be blocked, containers that are with block_external_network as true can still communicate with each other, network cannot be specified in the `container.options` field.
     */
    blockExternalNetwork?: boolean | null;
    /**
     * Overrides the `CMD` specified in the container. If there is an ENTRYPOINT (either in the container image or with the entrypoint field below) then commands are appended as arguments to the ENTRYPOINT.
     */
    commands?: string[] | null;
    /**
     * Overrides the `ENTRYPOINT` specified in the container.
     */
    entrypoint?: string | null;
    /**
     * The URI to pull the container image from.
     */
    imageUri?: string | null;
    /**
     * Arbitrary additional options to include in the "docker run" command when running this container, e.g. "--network host".
     */
    options?: string | null;
    /**
     * Optional password for logging in to a docker registry. If password matches `projects/x/secrets/x/versions/x` then Batch will read the password from the Secret Manager;
     */
    password?: string | null;
    /**
     * Optional username for logging in to a docker registry. If username matches `projects/x/secrets/x/versions/x` then Batch will read the username from the Secret Manager.
     */
    username?: string | null;
    /**
     * Volumes to mount (bind mount) from the host machine files or directories into the container, formatted to match docker run's --volume option, e.g. /foo:/bar, or /foo:/bar:ro
     */
    volumes?: string[] | null;
  }
  /**
   * A new persistent disk or a local ssd. A VM can only have one local SSD setting but multiple local SSD partitions. See https://cloud.google.com/compute/docs/disks#pdspecs and https://cloud.google.com/compute/docs/disks#localssds.
   */
  export interface Schema$Disk {
    /**
     * Local SSDs are available through both "SCSI" and "NVMe" interfaces. If not indicated, "NVMe" will be the default one for local ssds. We only support "SCSI" for persistent disks now.
     */
    diskInterface?: string | null;
    /**
     * Name of a public or custom image used as the data source. For example, the following are all valid URLs: * Specify the image by its family name: projects/{project\}/global/images/family/{image_family\} * Specify the image version: projects/{project\}/global/images/{image_version\} You can also use Batch customized image in short names. The following image values are supported for a boot disk: * "batch-debian": use Batch Debian images. * "batch-centos": use Batch CentOS images. * "batch-cos": use Batch Container-Optimized images.
     */
    image?: string | null;
    /**
     * Disk size in GB. For persistent disk, this field is ignored if `data_source` is `image` or `snapshot`. For local SSD, size_gb should be a multiple of 375GB, otherwise, the final size will be the next greater multiple of 375 GB. For boot disk, Batch will calculate the boot disk size based on source image and task requirements if you do not speicify the size. If both this field and the boot_disk_mib field in task spec's compute_resource are defined, Batch will only honor this field.
     */
    sizeGb?: string | null;
    /**
     * Name of a snapshot used as the data source. Snapshot is not supported as boot disk now.
     */
    snapshot?: string | null;
    /**
     * Disk type as shown in `gcloud compute disk-types list`. For example, local SSD uses type "local-ssd". Persistent disks and boot disks use "pd-balanced", "pd-extreme", "pd-ssd" or "pd-standard".
     */
    type?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * An Environment describes a collection of environment variables to set when executing Tasks.
   */
  export interface Schema$Environment {
    /**
     * An encrypted JSON dictionary where the key/value pairs correspond to environment variable names and their values.
     */
    encryptedVariables?: Schema$KMSEnvMap;
    /**
     * A map of environment variable names to Secret Manager secret names. The VM will access the named secrets to set the value of each environment variable.
     */
    secretVariables?: {[key: string]: string} | null;
    /**
     * A map of environment variable names to values.
     */
    variables?: {[key: string]: string} | null;
  }
  /**
   * Represents a Google Cloud Storage volume.
   */
  export interface Schema$GCS {
    /**
     * Remote path, either a bucket name or a subdirectory of a bucket, e.g.: bucket_name, bucket_name/subdirectory/
     */
    remotePath?: string | null;
  }
  /**
   * InstancePolicy describes an instance type and resources attached to each VM created by this InstancePolicy.
   */
  export interface Schema$InstancePolicy {
    /**
     * The accelerators attached to each VM instance.
     */
    accelerators?: Schema$Accelerator[];
    /**
     * Boot disk to be created and attached to each VM by this InstancePolicy. Boot disk will be deleted when the VM is deleted. Batch API now only supports booting from image.
     */
    bootDisk?: Schema$Disk;
    /**
     * Non-boot disks to be attached for each VM created by this InstancePolicy. New disks will be deleted when the VM is deleted.
     */
    disks?: Schema$AttachedDisk[];
    /**
     * The Compute Engine machine type.
     */
    machineType?: string | null;
    /**
     * The minimum CPU platform. See https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform. Not yet implemented.
     */
    minCpuPlatform?: string | null;
    /**
     * The provisioning model.
     */
    provisioningModel?: string | null;
  }
  /**
   * Either an InstancePolicy or an instance template.
   */
  export interface Schema$InstancePolicyOrTemplate {
    /**
     * Set this field true if users want Batch to help fetch drivers from a third party location and install them for GPUs specified in policy.accelerators or instance_template on their behalf. Default is false.
     */
    installGpuDrivers?: boolean | null;
    /**
     * Name of an instance template used to create VMs. Named the field as 'instance_template' instead of 'template' to avoid c++ keyword conflict.
     */
    instanceTemplate?: string | null;
    /**
     * InstancePolicy.
     */
    policy?: Schema$InstancePolicy;
  }
  /**
   * VM instance status.
   */
  export interface Schema$InstanceStatus {
    /**
     * The VM boot disk.
     */
    bootDisk?: Schema$Disk;
    /**
     * The Compute Engine machine type.
     */
    machineType?: string | null;
    /**
     * The VM instance provisioning model.
     */
    provisioningModel?: string | null;
    /**
     * The max number of tasks can be assigned to this instance type.
     */
    taskPack?: string | null;
  }
  /**
   * The Cloud Batch Job description.
   */
  export interface Schema$Job {
    /**
     * Compute resource allocation for all TaskGroups in the Job.
     */
    allocationPolicy?: Schema$AllocationPolicy;
    /**
     * Output only. When the Job was created.
     */
    createTime?: string | null;
    /**
     * Labels for the Job. Labels could be user provided or system generated. For example, "labels": { "department": "finance", "environment": "test" \} You can assign up to 64 labels. [Google Compute Engine label restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) apply. Label names that start with "goog-" or "google-" are reserved.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Log preservation policy for the Job.
     */
    logsPolicy?: Schema$LogsPolicy;
    /**
     * Output only. Job name. For example: "projects/123456/locations/us-central1/jobs/job01".
     */
    name?: string | null;
    /**
     * Notification configurations.
     */
    notifications?: Schema$JobNotification[];
    /**
     * Priority of the Job. The valid value range is [0, 100). Default value is 0. Higher value indicates higher priority. A job with higher priority value is more likely to run earlier if all other requirements are satisfied.
     */
    priority?: string | null;
    /**
     * Output only. Job status. It is read only for users.
     */
    status?: Schema$JobStatus;
    /**
     * Required. TaskGroups in the Job. Only one TaskGroup is supported now.
     */
    taskGroups?: Schema$TaskGroup[];
    /**
     * Output only. A system generated unique ID (in UUID4 format) for the Job.
     */
    uid?: string | null;
    /**
     * Output only. The last time the Job was updated.
     */
    updateTime?: string | null;
  }
  /**
   * Notification configurations.
   */
  export interface Schema$JobNotification {
    /**
     * The attribute requirements of messages to be sent to this Pub/Sub topic. Without this field, no message will be sent.
     */
    message?: Schema$Message;
    /**
     * The Pub/Sub topic where notifications like the job state changes will be published. This topic exist in the same project as the job and billings will be charged to this project. If not specified, no Pub/Sub messages will be sent. Topic format: `projects/{project\}/topics/{topic\}`.
     */
    pubsubTopic?: string | null;
  }
  /**
   * Job status.
   */
  export interface Schema$JobStatus {
    /**
     * The duration of time that the Job spent in status RUNNING.
     */
    runDuration?: string | null;
    /**
     * Job state
     */
    state?: string | null;
    /**
     * Job status events
     */
    statusEvents?: Schema$StatusEvent[];
    /**
     * Aggregated task status for each TaskGroup in the Job. The map key is TaskGroup ID.
     */
    taskGroups?: {[key: string]: Schema$TaskGroupStatus} | null;
  }
  export interface Schema$KMSEnvMap {
    /**
     * The value of the cipherText response from the `encrypt` method.
     */
    cipherText?: string | null;
    /**
     * The name of the KMS key that will be used to decrypt the cipher text.
     */
    keyName?: string | null;
  }
  /**
   * LifecyclePolicy describes how to deal with task failures based on different conditions.
   */
  export interface Schema$LifecyclePolicy {
    /**
     * Action to execute when ActionCondition is true. When RETRY_TASK is specified, we will retry failed tasks if we notice any exit code match and fail tasks if no match is found. Likewise, when FAIL_TASK is specified, we will fail tasks if we notice any exit code match and retry tasks if no match is found.
     */
    action?: string | null;
    /**
     * Conditions that decide why a task failure is dealt with a specific action.
     */
    actionCondition?: Schema$ActionCondition;
  }
  /**
   * ListJob Response.
   */
  export interface Schema$ListJobsResponse {
    /**
     * Jobs.
     */
    jobs?: Schema$Job[];
    /**
     * Next page token.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * The response message for Locations.ListLocations.
   */
  export interface Schema$ListLocationsResponse {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: Schema$Location[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$Operation[];
  }
  /**
   * ListTasks Response.
   */
  export interface Schema$ListTasksResponse {
    /**
     * Next page token.
     */
    nextPageToken?: string | null;
    /**
     * Tasks.
     */
    tasks?: Schema$Task[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * A resource that represents Google Cloud Platform location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For example, "Tokyo".
     */
    displayName?: string | null;
    /**
     * Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"\}
     */
    labels?: {[key: string]: string} | null;
    /**
     * The canonical id for this location. For example: `"us-east1"`.
     */
    locationId?: string | null;
    /**
     * Service-specific metadata. For example the available capacity at the given location.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`
     */
    name?: string | null;
  }
  export interface Schema$LocationPolicy {
    /**
     * A list of allowed location names represented by internal URLs. Each location can be a region or a zone. Only one region or multiple zones in one region is supported now. For example, ["regions/us-central1"] allow VMs in any zones in region us-central1. ["zones/us-central1-a", "zones/us-central1-c"] only allow VMs in zones us-central1-a and us-central1-c. All locations end up in different regions would cause errors. For example, ["regions/us-central1", "zones/us-central1-a", "zones/us-central1-b", "zones/us-west1-a"] contains 2 regions "us-central1" and "us-west1". An error is expected in this case.
     */
    allowedLocations?: string[] | null;
  }
  /**
   * LogsPolicy describes how outputs from a Job's Tasks (stdout/stderr) will be preserved.
   */
  export interface Schema$LogsPolicy {
    /**
     * Where logs should be saved.
     */
    destination?: string | null;
    /**
     * The path to which logs are saved when the destination = PATH. This can be a local file path on the VM, or under the mount point of a Persistent Disk or Filestore, or a Cloud Storage path.
     */
    logsPath?: string | null;
  }
  /**
   * Message details. Describe the attribute that a message should have. Without specified message attributes, no message will be sent by default.
   */
  export interface Schema$Message {
    /**
     * The new job state.
     */
    newJobState?: string | null;
    /**
     * The new task state.
     */
    newTaskState?: string | null;
    /**
     * The message type.
     */
    type?: string | null;
  }
  /**
   * A network interface.
   */
  export interface Schema$NetworkInterface {
    /**
     * The URL of an existing network resource. You can specify the network as a full or partial URL. For example, the following are all valid URLs: * https://www.googleapis.com/compute/v1/projects/{project\}/global/networks/{network\} * projects/{project\}/global/networks/{network\} * global/networks/{network\}
     */
    network?: string | null;
    /**
     * Default is false (with an external IP address). Required if no external public IP address is attached to the VM. If no external public IP address, additional configuration is required to allow the VM to access Google Services. See https://cloud.google.com/vpc/docs/configure-private-google-access and https://cloud.google.com/nat/docs/gce-example#create-nat for more information.
     */
    noExternalIpAddress?: boolean | null;
    /**
     * The URL of an existing subnetwork resource in the network. You can specify the subnetwork as a full or partial URL. For example, the following are all valid URLs: * https://www.googleapis.com/compute/v1/projects/{project\}/regions/{region\}/subnetworks/{subnetwork\} * projects/{project\}/regions/{region\}/subnetworks/{subnetwork\} * regions/{region\}/subnetworks/{subnetwork\}
     */
    subnetwork?: string | null;
  }
  /**
   * NetworkPolicy describes VM instance network configurations.
   */
  export interface Schema$NetworkPolicy {
    /**
     * Network configurations.
     */
    networkInterfaces?: Schema$NetworkInterface[];
  }
  /**
   * Represents an NFS volume.
   */
  export interface Schema$NFS {
    /**
     * Remote source path exported from the NFS, e.g., "/share".
     */
    remotePath?: string | null;
    /**
     * The IP address of the NFS.
     */
    server?: string | null;
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id\}`.
     */
    name?: string | null;
    /**
     * The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$OperationMetadata {
    /**
     * Output only. API version used to start the operation.
     */
    apiVersion?: string | null;
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    requestedCancellation?: boolean | null;
    /**
     * Output only. Human-readable status of the operation, if any.
     */
    statusMessage?: string | null;
    /**
     * Output only. Server-defined resource path for the target of the operation.
     */
    target?: string | null;
    /**
     * Output only. Name of the verb executed by the operation.
     */
    verb?: string | null;
  }
  /**
   * Request to report agent's state. The Request itself implies the agent is healthy.
   */
  export interface Schema$ReportAgentStateRequest {
    /**
     * Agent info.
     */
    agentInfo?: Schema$AgentInfo;
    /**
     * Agent timing info.
     */
    agentTimingInfo?: Schema$AgentTimingInfo;
    /**
     * Agent metadata.
     */
    metadata?: Schema$AgentMetadata;
  }
  /**
   * Response to ReportAgentStateRequest.
   */
  export interface Schema$ReportAgentStateResponse {
    /**
     * Default report interval override
     */
    defaultReportInterval?: string | null;
    /**
     * Minimum report interval override
     */
    minReportInterval?: string | null;
    /**
     * Tasks assigned to the agent
     */
    tasks?: Schema$AgentTask[];
  }
  /**
   * Runnable describes instructions for executing a specific script or container as part of a Task.
   */
  export interface Schema$Runnable {
    /**
     * By default, after a Runnable fails, no further Runnable are executed. This flag indicates that this Runnable must be run even if the Task has already failed. This is useful for Runnables that copy output files off of the VM or for debugging. The always_run flag does not override the Task's overall max_run_duration. If the max_run_duration has expired then no further Runnables will execute, not even always_run Runnables.
     */
    alwaysRun?: boolean | null;
    /**
     * This flag allows a Runnable to continue running in the background while the Task executes subsequent Runnables. This is useful to provide services to other Runnables (or to provide debugging support tools like SSH servers).
     */
    background?: boolean | null;
    /**
     * Barrier runnable.
     */
    barrier?: Schema$Barrier;
    /**
     * Container runnable.
     */
    container?: Schema$Container;
    /**
     * Environment variables for this Runnable (overrides variables set for the whole Task or TaskGroup).
     */
    environment?: Schema$Environment;
    /**
     * Normally, a non-zero exit status causes the Task to fail. This flag allows execution of other Runnables to continue instead.
     */
    ignoreExitStatus?: boolean | null;
    /**
     * Script runnable.
     */
    script?: Schema$Script;
    /**
     * Timeout for this Runnable.
     */
    timeout?: string | null;
  }
  /**
   * Script runnable.
   */
  export interface Schema$Script {
    /**
     * Script file path on the host VM. To specify an interpreter, please add a `#!`(also known as [shebang line](https://en.wikipedia.org/wiki/Shebang_(Unix))) as the first line of the file.(For example, to execute the script using bash, `#!/bin/bash` should be the first line of the file. To execute the script using`Python3`, `#!/usr/bin/env python3` should be the first line of the file.) Otherwise, the file will by default be excuted by `/bin/sh`.
     */
    path?: string | null;
    /**
     * Shell script text. To specify an interpreter, please add a `#!\n` at the beginning of the text.(For example, to execute the script using bash, `#!/bin/bash\n` should be added. To execute the script using`Python3`, `#!/usr/bin/env python3\n` should be added.) Otherwise, the script will by default be excuted by `/bin/sh`.
     */
    text?: string | null;
  }
  /**
   * Carries information about a Google Cloud service account.
   */
  export interface Schema$ServiceAccount {
    /**
     * Email address of the service account. If not specified, the default Compute Engine service account for the project will be used. If instance template is being used, the service account has to be specified in the instance template and it has to match the email field here.
     */
    email?: string | null;
    /**
     * List of scopes to be enabled for this service account on the VM, in addition to the cloud-platform API scope that will be added by default.
     */
    scopes?: string[] | null;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details. There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }
  /**
   * Status event
   */
  export interface Schema$StatusEvent {
    /**
     * Description of the event.
     */
    description?: string | null;
    /**
     * The time this event occurred.
     */
    eventTime?: string | null;
    /**
     * Task Execution
     */
    taskExecution?: Schema$TaskExecution;
    /**
     * Task State
     */
    taskState?: string | null;
    /**
     * Type of the event.
     */
    type?: string | null;
  }
  /**
   * A Cloud Batch task.
   */
  export interface Schema$Task {
    /**
     * Task name. The name is generated from the parent TaskGroup name and 'id' field. For example: "projects/123456/locations/us-west1/jobs/job01/taskGroups/group01/tasks/task01".
     */
    name?: string | null;
    /**
     * Task Status.
     */
    status?: Schema$TaskStatus;
  }
  /**
   * This Task Execution field includes detail information for task execution procedures, based on StatusEvent types.
   */
  export interface Schema$TaskExecution {
    /**
     * When task is completed as the status of FAILED or SUCCEEDED, exit code is for one task execution result, default is 0 as success.
     */
    exitCode?: number | null;
  }
  /**
   * A TaskGroup contains one or multiple Tasks that share the same Runnable but with different runtime parameters.
   */
  export interface Schema$TaskGroup {
    /**
     * Output only. TaskGroup name. The system generates this field based on parent Job name. For example: "projects/123456/locations/us-west1/jobs/job01/taskGroups/group01".
     */
    name?: string | null;
    /**
     * Max number of tasks that can run in parallel. Default to min(task_count, 1000). Field parallelism must be 1 if the scheduling_policy is IN_ORDER.
     */
    parallelism?: string | null;
    /**
     * When true, Batch will configure SSH to allow passwordless login between VMs running the Batch tasks in the same TaskGroup.
     */
    permissiveSsh?: boolean | null;
    /**
     * When true, Batch will populate a file with a list of all VMs assigned to the TaskGroup and set the BATCH_HOSTS_FILE environment variable to the path of that file. Defaults to false.
     */
    requireHostsFile?: boolean | null;
    /**
     * Number of Tasks in the TaskGroup. Default is 1.
     */
    taskCount?: string | null;
    /**
     * Max number of tasks that can be run on a VM at the same time. If not specified, the system will decide a value based on available compute resources on a VM and task requirements.
     */
    taskCountPerNode?: string | null;
    /**
     * An array of environment variable mappings, which are passed to Tasks with matching indices. If task_environments is used then task_count should not be specified in the request (and will be ignored). Task count will be the length of task_environments. Tasks get a BATCH_TASK_INDEX and BATCH_TASK_COUNT environment variable, in addition to any environment variables set in task_environments, specifying the number of Tasks in the Task's parent TaskGroup, and the specific Task's index in the TaskGroup (0 through BATCH_TASK_COUNT - 1). task_environments supports up to 200 entries.
     */
    taskEnvironments?: Schema$Environment[];
    /**
     * Required. Tasks in the group share the same task spec.
     */
    taskSpec?: Schema$TaskSpec;
  }
  /**
   * Aggregated task status for a TaskGroup.
   */
  export interface Schema$TaskGroupStatus {
    /**
     * Count of task in each state in the TaskGroup. The map key is task state name.
     */
    counts?: {[key: string]: string} | null;
    /**
     * Status of instances allocated for the TaskGroup.
     */
    instances?: Schema$InstanceStatus[];
  }
  /**
   * Spec of a task
   */
  export interface Schema$TaskSpec {
    /**
     * ComputeResource requirements.
     */
    computeResource?: Schema$ComputeResource;
    /**
     * Environment variables to set before running the Task.
     */
    environment?: Schema$Environment;
    /**
     * Deprecated: please use environment(non-plural) instead.
     */
    environments?: {[key: string]: string} | null;
    /**
     * Lifecycle management schema when any task in a task group is failed. Currently we only support one lifecycle policy. When the lifecycle policy condition is met, the action in the policy will execute. If task execution result does not meet with the defined lifecycle policy, we consider it as the default policy. Default policy means if the exit code is 0, exit task. If task ends with non-zero exit code, retry the task with max_retry_count.
     */
    lifecyclePolicies?: Schema$LifecyclePolicy[];
    /**
     * Maximum number of retries on failures. The default, 0, which means never retry. The valid value range is [0, 10].
     */
    maxRetryCount?: number | null;
    /**
     * Maximum duration the task should run. The task will be killed and marked as FAILED if over this limit.
     */
    maxRunDuration?: string | null;
    /**
     * The sequence of scripts or containers to run for this Task. Each Task using this TaskSpec executes its list of runnables in order. The Task succeeds if all of its runnables either exit with a zero status or any that exit with a non-zero status have the ignore_exit_status flag. Background runnables are killed automatically (if they have not already exited) a short time after all foreground runnables have completed. Even though this is likely to result in a non-zero exit status for the background runnable, these automatic kills are not treated as Task failures.
     */
    runnables?: Schema$Runnable[];
    /**
     * Volumes to mount before running Tasks using this TaskSpec.
     */
    volumes?: Schema$Volume[];
  }
  /**
   * Status of a task
   */
  export interface Schema$TaskStatus {
    /**
     * Task state
     */
    state?: string | null;
    /**
     * Detailed info about why the state is reached.
     */
    statusEvents?: Schema$StatusEvent[];
  }
  /**
   * Volume describes a volume and parameters for it to be mounted to a VM.
   */
  export interface Schema$Volume {
    /**
     * Device name of an attached disk volume, which should align with a device_name specified by job.allocation_policy.instances[0].policy.disks[i].device_name or defined by the given instance template in job.allocation_policy.instances[0].instance_template.
     */
    deviceName?: string | null;
    /**
     * A Google Cloud Storage (GCS) volume.
     */
    gcs?: Schema$GCS;
    /**
     * For Google Cloud Storage (GCS), mount options are the options supported by the gcsfuse tool (https://github.com/GoogleCloudPlatform/gcsfuse). For existing persistent disks, mount options provided by the mount command (https://man7.org/linux/man-pages/man8/mount.8.html) except writing are supported. This is due to restrictions of multi-writer mode (https://cloud.google.com/compute/docs/disks/sharing-disks-between-vms). For other attached disks and Network File System (NFS), mount options are these supported by the mount command (https://man7.org/linux/man-pages/man8/mount.8.html).
     */
    mountOptions?: string[] | null;
    /**
     * The mount path for the volume, e.g. /mnt/disks/share.
     */
    mountPath?: string | null;
    /**
     * A Network File System (NFS) volume. For example, a Filestore file share.
     */
    nfs?: Schema$NFS;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    jobs: Resource$Projects$Locations$Jobs;
    operations: Resource$Projects$Locations$Operations;
    state: Resource$Projects$Locations$State;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.jobs = new Resource$Projects$Locations$Jobs(this.context);
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.state = new Resource$Projects$Locations$State(this.context);
    }

    /**
     * Gets information about a location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/batch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const batch = google.batch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await batch.projects.locations.get({
     *     // Resource name for the location.
     *     name: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "labels": {},
     *   //   "locationId": "my_locationId",
     *   //   "metadata": {},
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Location>;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(callback: BodyResponseCallback<Schema$Location>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Get
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Location> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://batch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Location>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }

    /**
     * Lists information about the supported locations for this service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/batch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const batch = google.batch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await batch.projects.locations.list({
     *     // A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     *     filter: 'placeholder-value',
     *     // The resource that owns the locations collection, if applicable.
     *     name: 'projects/my-project',
     *     // The maximum number of results to return. If not set, the service selects a default.
     *     pageSize: 'placeholder-value',
     *     // A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "locations": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLocationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$List
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListLocationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://batch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/locations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListLocationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Get
    extends StandardParameters {
    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List
    extends StandardParameters {
    /**
     * A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     */
    filter?: string;
    /**
     * The resource that owns the locations collection, if applicable.
     */
    name?: string;
    /**
     * The maximum number of results to return. If not set, the service selects a default.
     */
    pageSize?: number;
    /**
     * A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Jobs {
    context: APIRequestContext;
    taskGroups: Resource$Projects$Locations$Jobs$Taskgroups;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.taskGroups = new Resource$Projects$Locations$Jobs$Taskgroups(
        this.context
      );
    }

    /**
     * Create a Job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/batch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const batch = google.batch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await batch.projects.locations.jobs.create({
     *     // ID used to uniquely identify the Job within its parent scope. This field should contain at most 63 characters and must start with lowercase characters. Only lowercase characters, numbers and '-' are accepted. The '-' character cannot be the first or the last one. A system generated ID will be used if the field is not set. The job.name field in the request will be ignored and the created resource name of the Job will be "{parent\}/jobs/{job_id\}".
     *     jobId: 'placeholder-value',
     *     // Required. The parent resource name where the Job will be created. Pattern: "projects/{project\}/locations/{location\}"
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "allocationPolicy": {},
     *       //   "createTime": "my_createTime",
     *       //   "labels": {},
     *       //   "logsPolicy": {},
     *       //   "name": "my_name",
     *       //   "notifications": [],
     *       //   "priority": "my_priority",
     *       //   "status": {},
     *       //   "taskGroups": [],
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "allocationPolicy": {},
     *   //   "createTime": "my_createTime",
     *   //   "labels": {},
     *   //   "logsPolicy": {},
     *   //   "name": "my_name",
     *   //   "notifications": [],
     *   //   "priority": "my_priority",
     *   //   "status": {},
     *   //   "taskGroups": [],
     *   //   "uid": "my_uid",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Jobs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Jobs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Job>;
    create(
      params: Params$Resource$Projects$Locations$Jobs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Jobs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Jobs$Create,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    create(callback: BodyResponseCallback<Schema$Job>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Create
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Job> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Jobs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://batch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/jobs').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Job>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }

    /**
     * Delete a Job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/batch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const batch = google.batch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await batch.projects.locations.jobs.delete({
     *     // Job name.
     *     name: 'projects/my-project/locations/my-location/jobs/my-job',
     *     // Optional. Reason for this deletion.
     *     reason: 'placeholder-value',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Jobs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Jobs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Jobs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Jobs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Jobs$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Jobs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://batch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Get a Job specified by its resource name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/batch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const batch = google.batch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await batch.projects.locations.jobs.get({
     *     // Required. Job name.
     *     name: 'projects/my-project/locations/my-location/jobs/my-job',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "allocationPolicy": {},
     *   //   "createTime": "my_createTime",
     *   //   "labels": {},
     *   //   "logsPolicy": {},
     *   //   "name": "my_name",
     *   //   "notifications": [],
     *   //   "priority": "my_priority",
     *   //   "status": {},
     *   //   "taskGroups": [],
     *   //   "uid": "my_uid",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Jobs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Jobs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Job>;
    get(
      params: Params$Resource$Projects$Locations$Jobs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Jobs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Jobs$Get,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    get(callback: BodyResponseCallback<Schema$Job>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Get
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Job> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Jobs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://batch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Job>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }

    /**
     * List all Jobs for a project within a region.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/batch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const batch = google.batch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await batch.projects.locations.jobs.list({
     *     // List filter.
     *     filter: 'placeholder-value',
     *     // Page size.
     *     pageSize: 'placeholder-value',
     *     // Page token.
     *     pageToken: 'placeholder-value',
     *     // Parent path.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "jobs": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Jobs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Jobs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListJobsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Jobs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Jobs$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListJobsResponse>,
      callback: BodyResponseCallback<Schema$ListJobsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Jobs$List,
      callback: BodyResponseCallback<Schema$ListJobsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListJobsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$List
        | BodyResponseCallback<Schema$ListJobsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListJobsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListJobsResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ListJobsResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Jobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://batch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/jobs').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListJobsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListJobsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Jobs$Create
    extends StandardParameters {
    /**
     * ID used to uniquely identify the Job within its parent scope. This field should contain at most 63 characters and must start with lowercase characters. Only lowercase characters, numbers and '-' are accepted. The '-' character cannot be the first or the last one. A system generated ID will be used if the field is not set. The job.name field in the request will be ignored and the created resource name of the Job will be "{parent\}/jobs/{job_id\}".
     */
    jobId?: string;
    /**
     * Required. The parent resource name where the Job will be created. Pattern: "projects/{project\}/locations/{location\}"
     */
    parent?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Job;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Delete
    extends StandardParameters {
    /**
     * Job name.
     */
    name?: string;
    /**
     * Optional. Reason for this deletion.
     */
    reason?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Get
    extends StandardParameters {
    /**
     * Required. Job name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Jobs$List
    extends StandardParameters {
    /**
     * List filter.
     */
    filter?: string;
    /**
     * Page size.
     */
    pageSize?: number;
    /**
     * Page token.
     */
    pageToken?: string;
    /**
     * Parent path.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Jobs$Taskgroups {
    context: APIRequestContext;
    tasks: Resource$Projects$Locations$Jobs$Taskgroups$Tasks;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.tasks = new Resource$Projects$Locations$Jobs$Taskgroups$Tasks(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Jobs$Taskgroups$Tasks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Return a single Task.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/batch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const batch = google.batch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await batch.projects.locations.jobs.taskGroups.tasks.get({
     *     // Required. Task name.
     *     name: 'projects/my-project/locations/my-location/jobs/my-job/taskGroups/my-taskGroup/tasks/my-task',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "status": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Jobs$Taskgroups$Tasks$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Jobs$Taskgroups$Tasks$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Task>;
    get(
      params: Params$Resource$Projects$Locations$Jobs$Taskgroups$Tasks$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Jobs$Taskgroups$Tasks$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Task>,
      callback: BodyResponseCallback<Schema$Task>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Jobs$Taskgroups$Tasks$Get,
      callback: BodyResponseCallback<Schema$Task>
    ): void;
    get(callback: BodyResponseCallback<Schema$Task>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Taskgroups$Tasks$Get
        | BodyResponseCallback<Schema$Task>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Task>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Task>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Task> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Jobs$Taskgroups$Tasks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Jobs$Taskgroups$Tasks$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://batch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Task>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Task>(parameters);
      }
    }

    /**
     * List Tasks associated with a job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/batch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const batch = google.batch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await batch.projects.locations.jobs.taskGroups.tasks.list({
     *     // Task filter, null filter matches all Tasks. Filter string should be of the format State=TaskStatus.State e.g. State=RUNNING
     *     filter: 'placeholder-value',
     *     // Page size.
     *     pageSize: 'placeholder-value',
     *     // Page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Name of a TaskGroup from which Tasks are being requested. Pattern: "projects/{project\}/locations/{location\}/jobs/{job\}/taskGroups/{task_group\}"
     *     parent:
     *       'projects/my-project/locations/my-location/jobs/my-job/taskGroups/my-taskGroup',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "tasks": [],
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Jobs$Taskgroups$Tasks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Jobs$Taskgroups$Tasks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTasksResponse>;
    list(
      params: Params$Resource$Projects$Locations$Jobs$Taskgroups$Tasks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Jobs$Taskgroups$Tasks$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListTasksResponse>,
      callback: BodyResponseCallback<Schema$ListTasksResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Jobs$Taskgroups$Tasks$List,
      callback: BodyResponseCallback<Schema$ListTasksResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTasksResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Taskgroups$Tasks$List
        | BodyResponseCallback<Schema$ListTasksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListTasksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListTasksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListTasksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Jobs$Taskgroups$Tasks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Jobs$Taskgroups$Tasks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://batch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/tasks').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListTasksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListTasksResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Jobs$Taskgroups$Tasks$Get
    extends StandardParameters {
    /**
     * Required. Task name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Taskgroups$Tasks$List
    extends StandardParameters {
    /**
     * Task filter, null filter matches all Tasks. Filter string should be of the format State=TaskStatus.State e.g. State=RUNNING
     */
    filter?: string;
    /**
     * Page size.
     */
    pageSize?: number;
    /**
     * Page token.
     */
    pageToken?: string;
    /**
     * Required. Name of a TaskGroup from which Tasks are being requested. Pattern: "projects/{project\}/locations/{location\}/jobs/{job\}/taskGroups/{task_group\}"
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/batch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const batch = google.batch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await batch.projects.locations.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Locations$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Cancel
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://batch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/batch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const batch = google.batch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await batch.projects.locations.operations.delete({
     *     // The name of the operation resource to be deleted.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://batch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/batch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const batch = google.batch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await batch.projects.locations.operations.get({
     *     // The name of the operation resource.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Get
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://batch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/batch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const batch = google.batch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await batch.projects.locations.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'projects/my-project/locations/my-location',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "operations": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$List
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://batch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/operations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Operations$Cancel
    extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelOperationRequest;
  }
  export interface Params$Resource$Projects$Locations$Operations$Delete
    extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$State {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Report agent's state, e.g. agent status and tasks information
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/batch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const batch = google.batch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await batch.projects.locations.state.report({
     *     // Required. Format: projects/{project\}/locations/{location\} {project\} should be a project number.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "agentInfo": {},
     *       //   "agentTimingInfo": {},
     *       //   "metadata": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "defaultReportInterval": "my_defaultReportInterval",
     *   //   "minReportInterval": "my_minReportInterval",
     *   //   "tasks": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    report(
      params: Params$Resource$Projects$Locations$State$Report,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    report(
      params?: Params$Resource$Projects$Locations$State$Report,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReportAgentStateResponse>;
    report(
      params: Params$Resource$Projects$Locations$State$Report,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    report(
      params: Params$Resource$Projects$Locations$State$Report,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ReportAgentStateResponse>,
      callback: BodyResponseCallback<Schema$ReportAgentStateResponse>
    ): void;
    report(
      params: Params$Resource$Projects$Locations$State$Report,
      callback: BodyResponseCallback<Schema$ReportAgentStateResponse>
    ): void;
    report(
      callback: BodyResponseCallback<Schema$ReportAgentStateResponse>
    ): void;
    report(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$State$Report
        | BodyResponseCallback<Schema$ReportAgentStateResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReportAgentStateResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReportAgentStateResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ReportAgentStateResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$State$Report;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$State$Report;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://batch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/state:report').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReportAgentStateResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReportAgentStateResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$State$Report
    extends StandardParameters {
    /**
     * Required. Format: projects/{project\}/locations/{location\} {project\} should be a project number.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReportAgentStateRequest;
  }
}
