/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/driverapp/i18n/i18n.properties":
/*!**********************************************************!*\
  !*** ./build.definitions/driverapp/i18n/i18n.properties ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "xtit_orderstatus_ready=Ready\nxtit_orderstatus_execution=In Execution\nxtit_orderstatus_completed=Completed\nxtit_orderstatus_notstarted=Not Started\nxtit_orderstatus_notready=Not Ready\nxtit_stopstatus_planned=Planned\nxtit_stopstatus_atstore=At Store\nxtit_stopstatus_departed=Departed"

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let driverapp_actions_action_service_closeoffline_action = __webpack_require__(/*! ./driverapp/Actions/action/Service/CloseOffline.action */ "./build.definitions/driverapp/Actions/action/Service/CloseOffline.action")
let driverapp_actions_action_service_closeofflinefailuremessage_action = __webpack_require__(/*! ./driverapp/Actions/action/Service/CloseOfflineFailureMessage.action */ "./build.definitions/driverapp/Actions/action/Service/CloseOfflineFailureMessage.action")
let driverapp_actions_action_service_closeofflinesuccessmessage_action = __webpack_require__(/*! ./driverapp/Actions/action/Service/CloseOfflineSuccessMessage.action */ "./build.definitions/driverapp/Actions/action/Service/CloseOfflineSuccessMessage.action")
let driverapp_actions_action_service_downloadoffline_action = __webpack_require__(/*! ./driverapp/Actions/action/Service/DownloadOffline.action */ "./build.definitions/driverapp/Actions/action/Service/DownloadOffline.action")
let driverapp_actions_action_service_downloadstartedmessage_action = __webpack_require__(/*! ./driverapp/Actions/action/Service/DownloadStartedMessage.action */ "./build.definitions/driverapp/Actions/action/Service/DownloadStartedMessage.action")
let driverapp_actions_action_service_initializeoffline_action = __webpack_require__(/*! ./driverapp/Actions/action/Service/InitializeOffline.action */ "./build.definitions/driverapp/Actions/action/Service/InitializeOffline.action")
let driverapp_actions_action_service_initializeofflinefailuremessage_action = __webpack_require__(/*! ./driverapp/Actions/action/Service/InitializeOfflineFailureMessage.action */ "./build.definitions/driverapp/Actions/action/Service/InitializeOfflineFailureMessage.action")
let driverapp_actions_action_service_reportarrivaleventconfirmation_action = __webpack_require__(/*! ./driverapp/Actions/action/Service/ReportArrivalEventConfirmation.action */ "./build.definitions/driverapp/Actions/action/Service/ReportArrivalEventConfirmation.action")
let driverapp_actions_action_service_reportdepartureeventconfirmation_action = __webpack_require__(/*! ./driverapp/Actions/action/Service/ReportDepartureEventConfirmation.action */ "./build.definitions/driverapp/Actions/action/Service/ReportDepartureEventConfirmation.action")
let driverapp_actions_action_service_reportevent_action = __webpack_require__(/*! ./driverapp/Actions/action/Service/ReportEvent.action */ "./build.definitions/driverapp/Actions/action/Service/ReportEvent.action")
let driverapp_actions_action_service_reset_action = __webpack_require__(/*! ./driverapp/Actions/action/Service/Reset.action */ "./build.definitions/driverapp/Actions/action/Service/Reset.action")
let driverapp_actions_action_service_syncfailuremessage_action = __webpack_require__(/*! ./driverapp/Actions/action/Service/SyncFailureMessage.action */ "./build.definitions/driverapp/Actions/action/Service/SyncFailureMessage.action")
let driverapp_actions_action_service_syncstartedmessage_action = __webpack_require__(/*! ./driverapp/Actions/action/Service/SyncStartedMessage.action */ "./build.definitions/driverapp/Actions/action/Service/SyncStartedMessage.action")
let driverapp_actions_action_service_uploadattachment_action = __webpack_require__(/*! ./driverapp/Actions/action/Service/UploadAttachment.action */ "./build.definitions/driverapp/Actions/action/Service/UploadAttachment.action")
let driverapp_actions_action_service_uploadoffline_action = __webpack_require__(/*! ./driverapp/Actions/action/Service/UploadOffline.action */ "./build.definitions/driverapp/Actions/action/Service/UploadOffline.action")
let driverapp_actions_application_appupdate_action = __webpack_require__(/*! ./driverapp/Actions/Application/AppUpdate.action */ "./build.definitions/driverapp/Actions/Application/AppUpdate.action")
let driverapp_actions_application_appupdatefailuremessage_action = __webpack_require__(/*! ./driverapp/Actions/Application/AppUpdateFailureMessage.action */ "./build.definitions/driverapp/Actions/Application/AppUpdateFailureMessage.action")
let driverapp_actions_application_appupdateprogressbanner_action = __webpack_require__(/*! ./driverapp/Actions/Application/AppUpdateProgressBanner.action */ "./build.definitions/driverapp/Actions/Application/AppUpdateProgressBanner.action")
let driverapp_actions_application_appupdatesuccessmessage_action = __webpack_require__(/*! ./driverapp/Actions/Application/AppUpdateSuccessMessage.action */ "./build.definitions/driverapp/Actions/Application/AppUpdateSuccessMessage.action")
let driverapp_actions_application_logout_action = __webpack_require__(/*! ./driverapp/Actions/Application/Logout.action */ "./build.definitions/driverapp/Actions/Application/Logout.action")
let driverapp_actions_application_navtoabout_action = __webpack_require__(/*! ./driverapp/Actions/Application/NavToAbout.action */ "./build.definitions/driverapp/Actions/Application/NavToAbout.action")
let driverapp_actions_application_navtoactivitylog_action = __webpack_require__(/*! ./driverapp/Actions/Application/NavToActivityLog.action */ "./build.definitions/driverapp/Actions/Application/NavToActivityLog.action")
let driverapp_actions_application_navtosupport_action = __webpack_require__(/*! ./driverapp/Actions/Application/NavToSupport.action */ "./build.definitions/driverapp/Actions/Application/NavToSupport.action")
let driverapp_actions_application_onwillupdate_action = __webpack_require__(/*! ./driverapp/Actions/Application/OnWillUpdate.action */ "./build.definitions/driverapp/Actions/Application/OnWillUpdate.action")
let driverapp_actions_application_reset_action = __webpack_require__(/*! ./driverapp/Actions/Application/Reset.action */ "./build.definitions/driverapp/Actions/Application/Reset.action")
let driverapp_actions_application_resetmessage_action = __webpack_require__(/*! ./driverapp/Actions/Application/ResetMessage.action */ "./build.definitions/driverapp/Actions/Application/ResetMessage.action")
let driverapp_actions_application_usermenupopover_action = __webpack_require__(/*! ./driverapp/Actions/Application/UserMenuPopover.action */ "./build.definitions/driverapp/Actions/Application/UserMenuPopover.action")
let driverapp_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./driverapp/Actions/CloseModalPage_Cancel.action */ "./build.definitions/driverapp/Actions/CloseModalPage_Cancel.action")
let driverapp_actions_closemodalpage_complete_action = __webpack_require__(/*! ./driverapp/Actions/CloseModalPage_Complete.action */ "./build.definitions/driverapp/Actions/CloseModalPage_Complete.action")
let driverapp_actions_closepage_action = __webpack_require__(/*! ./driverapp/Actions/ClosePage.action */ "./build.definitions/driverapp/Actions/ClosePage.action")
let driverapp_actions_console_action = __webpack_require__(/*! ./driverapp/Actions/Console.action */ "./build.definitions/driverapp/Actions/Console.action")
let driverapp_actions_errorarchive_errorarchive_syncfailure_action = __webpack_require__(/*! ./driverapp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action */ "./build.definitions/driverapp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action")
let driverapp_actions_errorarchive_navtoerrorarchive_detail_action = __webpack_require__(/*! ./driverapp/Actions/ErrorArchive/NavToErrorArchive_Detail.action */ "./build.definitions/driverapp/Actions/ErrorArchive/NavToErrorArchive_Detail.action")
let driverapp_actions_errorarchive_navtoerrorarchive_list_action = __webpack_require__(/*! ./driverapp/Actions/ErrorArchive/NavToErrorArchive_List.action */ "./build.definitions/driverapp/Actions/ErrorArchive/NavToErrorArchive_List.action")
let driverapp_actions_genericbannermessage_action = __webpack_require__(/*! ./driverapp/Actions/GenericBannerMessage.action */ "./build.definitions/driverapp/Actions/GenericBannerMessage.action")
let driverapp_actions_genericmessagebox_action = __webpack_require__(/*! ./driverapp/Actions/GenericMessageBox.action */ "./build.definitions/driverapp/Actions/GenericMessageBox.action")
let driverapp_actions_genericnavigation_action = __webpack_require__(/*! ./driverapp/Actions/GenericNavigation.action */ "./build.definitions/driverapp/Actions/GenericNavigation.action")
let driverapp_actions_generictoastmessage_action = __webpack_require__(/*! ./driverapp/Actions/GenericToastMessage.action */ "./build.definitions/driverapp/Actions/GenericToastMessage.action")
let driverapp_actions_logging_loguploadfailure_action = __webpack_require__(/*! ./driverapp/Actions/Logging/LogUploadFailure.action */ "./build.definitions/driverapp/Actions/Logging/LogUploadFailure.action")
let driverapp_actions_logging_loguploadsuccessful_action = __webpack_require__(/*! ./driverapp/Actions/Logging/LogUploadSuccessful.action */ "./build.definitions/driverapp/Actions/Logging/LogUploadSuccessful.action")
let driverapp_actions_logging_uploadlog_action = __webpack_require__(/*! ./driverapp/Actions/Logging/UploadLog.action */ "./build.definitions/driverapp/Actions/Logging/UploadLog.action")
let driverapp_actions_logging_uploadlogprogress_action = __webpack_require__(/*! ./driverapp/Actions/Logging/UploadLogProgress.action */ "./build.definitions/driverapp/Actions/Logging/UploadLogProgress.action")
let driverapp_actions_main_service_closeoffline_action = __webpack_require__(/*! ./driverapp/Actions/main/Service/CloseOffline.action */ "./build.definitions/driverapp/Actions/main/Service/CloseOffline.action")
let driverapp_actions_main_service_closeofflinefailuremessage_action = __webpack_require__(/*! ./driverapp/Actions/main/Service/CloseOfflineFailureMessage.action */ "./build.definitions/driverapp/Actions/main/Service/CloseOfflineFailureMessage.action")
let driverapp_actions_main_service_closeofflinesuccessmessage_action = __webpack_require__(/*! ./driverapp/Actions/main/Service/CloseOfflineSuccessMessage.action */ "./build.definitions/driverapp/Actions/main/Service/CloseOfflineSuccessMessage.action")
let driverapp_actions_main_service_downloadoffline_action = __webpack_require__(/*! ./driverapp/Actions/main/Service/DownloadOffline.action */ "./build.definitions/driverapp/Actions/main/Service/DownloadOffline.action")
let driverapp_actions_main_service_downloadstartedmessage_action = __webpack_require__(/*! ./driverapp/Actions/main/Service/DownloadStartedMessage.action */ "./build.definitions/driverapp/Actions/main/Service/DownloadStartedMessage.action")
let driverapp_actions_main_service_initializeoffline_action = __webpack_require__(/*! ./driverapp/Actions/main/Service/InitializeOffline.action */ "./build.definitions/driverapp/Actions/main/Service/InitializeOffline.action")
let driverapp_actions_main_service_initializeofflinefailuremessage_action = __webpack_require__(/*! ./driverapp/Actions/main/Service/InitializeOfflineFailureMessage.action */ "./build.definitions/driverapp/Actions/main/Service/InitializeOfflineFailureMessage.action")
let driverapp_actions_main_service_syncfailuremessage_action = __webpack_require__(/*! ./driverapp/Actions/main/Service/SyncFailureMessage.action */ "./build.definitions/driverapp/Actions/main/Service/SyncFailureMessage.action")
let driverapp_actions_main_service_syncstartedmessage_action = __webpack_require__(/*! ./driverapp/Actions/main/Service/SyncStartedMessage.action */ "./build.definitions/driverapp/Actions/main/Service/SyncStartedMessage.action")
let driverapp_actions_main_service_uploadoffline_action = __webpack_require__(/*! ./driverapp/Actions/main/Service/UploadOffline.action */ "./build.definitions/driverapp/Actions/main/Service/UploadOffline.action")
let driverapp_actions_navigation_to_arrival_sign_action = __webpack_require__(/*! ./driverapp/Actions/Navigation/To_Arrival_Sign.action */ "./build.definitions/driverapp/Actions/Navigation/To_Arrival_Sign.action")
let driverapp_actions_navigation_to_delayevent_action = __webpack_require__(/*! ./driverapp/Actions/Navigation/To_DelayEvent.action */ "./build.definitions/driverapp/Actions/Navigation/To_DelayEvent.action")
let driverapp_actions_navigation_to_detail_action = __webpack_require__(/*! ./driverapp/Actions/Navigation/To_Detail.action */ "./build.definitions/driverapp/Actions/Navigation/To_Detail.action")
let driverapp_actions_navigation_to_event_action = __webpack_require__(/*! ./driverapp/Actions/Navigation/To_Event.action */ "./build.definitions/driverapp/Actions/Navigation/To_Event.action")
let driverapp_actions_navigation_to_stop_action = __webpack_require__(/*! ./driverapp/Actions/Navigation/To_Stop.action */ "./build.definitions/driverapp/Actions/Navigation/To_Stop.action")
let driverapp_actions_navigation_toactivitylog_action = __webpack_require__(/*! ./driverapp/Actions/Navigation/ToActivityLog.action */ "./build.definitions/driverapp/Actions/Navigation/ToActivityLog.action")
let driverapp_actions_navigation_todelvitems_action = __webpack_require__(/*! ./driverapp/Actions/Navigation/ToDelvItems.action */ "./build.definitions/driverapp/Actions/Navigation/ToDelvItems.action")
let driverapp_globals_application_appdefinition_version_global = __webpack_require__(/*! ./driverapp/Globals/Application/AppDefinition_Version.global */ "./build.definitions/driverapp/Globals/Application/AppDefinition_Version.global")
let driverapp_globals_application_applicationname_global = __webpack_require__(/*! ./driverapp/Globals/Application/ApplicationName.global */ "./build.definitions/driverapp/Globals/Application/ApplicationName.global")
let driverapp_globals_application_supportemail_global = __webpack_require__(/*! ./driverapp/Globals/Application/SupportEmail.global */ "./build.definitions/driverapp/Globals/Application/SupportEmail.global")
let driverapp_globals_application_supportphone_global = __webpack_require__(/*! ./driverapp/Globals/Application/SupportPhone.global */ "./build.definitions/driverapp/Globals/Application/SupportPhone.global")
let driverapp_i18n_i18n_properties = __webpack_require__(/*! ./driverapp/i18n/i18n.properties */ "./build.definitions/driverapp/i18n/i18n.properties")
let driverapp_jsconfig_json = __webpack_require__(/*! ./driverapp/jsconfig.json */ "./build.definitions/driverapp/jsconfig.json")
let driverapp_pages_application_about_page = __webpack_require__(/*! ./driverapp/Pages/Application/About.page */ "./build.definitions/driverapp/Pages/Application/About.page")
let driverapp_pages_application_support_page = __webpack_require__(/*! ./driverapp/Pages/Application/Support.page */ "./build.definitions/driverapp/Pages/Application/Support.page")
let driverapp_pages_application_useractivitylog_page = __webpack_require__(/*! ./driverapp/Pages/Application/UserActivityLog.page */ "./build.definitions/driverapp/Pages/Application/UserActivityLog.page")
let driverapp_pages_arrivalevent_page = __webpack_require__(/*! ./driverapp/Pages/ArrivalEvent.page */ "./build.definitions/driverapp/Pages/ArrivalEvent.page")
let driverapp_pages_attachment_page = __webpack_require__(/*! ./driverapp/Pages/Attachment.page */ "./build.definitions/driverapp/Pages/Attachment.page")
let driverapp_pages_delayevent_page = __webpack_require__(/*! ./driverapp/Pages/DelayEvent.page */ "./build.definitions/driverapp/Pages/DelayEvent.page")
let driverapp_pages_deliverditems_page = __webpack_require__(/*! ./driverapp/Pages/DeliverdItems.page */ "./build.definitions/driverapp/Pages/DeliverdItems.page")
let driverapp_pages_detail_page = __webpack_require__(/*! ./driverapp/Pages/Detail.page */ "./build.definitions/driverapp/Pages/Detail.page")
let driverapp_pages_errorarchive_errorarchive_detail_page = __webpack_require__(/*! ./driverapp/Pages/ErrorArchive/ErrorArchive_Detail.page */ "./build.definitions/driverapp/Pages/ErrorArchive/ErrorArchive_Detail.page")
let driverapp_pages_errorarchive_errorarchive_list_page = __webpack_require__(/*! ./driverapp/Pages/ErrorArchive/ErrorArchive_List.page */ "./build.definitions/driverapp/Pages/ErrorArchive/ErrorArchive_List.page")
let driverapp_pages_main_page = __webpack_require__(/*! ./driverapp/Pages/Main.page */ "./build.definitions/driverapp/Pages/Main.page")
let driverapp_pages_podevent_page = __webpack_require__(/*! ./driverapp/Pages/PODEvent.page */ "./build.definitions/driverapp/Pages/PODEvent.page")
let driverapp_pages_stop_page = __webpack_require__(/*! ./driverapp/Pages/Stop.page */ "./build.definitions/driverapp/Pages/Stop.page")
let driverapp_rules_action_createfailure_js = __webpack_require__(/*! ./driverapp/Rules/action/CreateFailure.js */ "./build.definitions/driverapp/Rules/action/CreateFailure.js")
let driverapp_rules_action_createsuccess_js = __webpack_require__(/*! ./driverapp/Rules/action/CreateSuccess.js */ "./build.definitions/driverapp/Rules/action/CreateSuccess.js")
let driverapp_rules_action_delvremarksvisibility_js = __webpack_require__(/*! ./driverapp/Rules/action/DelvRemarksVisibility.js */ "./build.definitions/driverapp/Rules/action/DelvRemarksVisibility.js")
let driverapp_rules_action_errorarchive_checkforsyncerror_js = __webpack_require__(/*! ./driverapp/Rules/action/ErrorArchive_CheckForSyncError.js */ "./build.definitions/driverapp/Rules/action/ErrorArchive_CheckForSyncError.js")
let driverapp_rules_action_ondocumentupload_js = __webpack_require__(/*! ./driverapp/Rules/action/OnDocumentUpload.js */ "./build.definitions/driverapp/Rules/action/OnDocumentUpload.js")
let driverapp_rules_action_ondocumentuploadpress_js = __webpack_require__(/*! ./driverapp/Rules/action/OnDocumentUploadPress.js */ "./build.definitions/driverapp/Rules/action/OnDocumentUploadPress.js")
let driverapp_rules_action_opendelvitems_js = __webpack_require__(/*! ./driverapp/Rules/action/OpenDelvItems.js */ "./build.definitions/driverapp/Rules/action/OpenDelvItems.js")
let driverapp_rules_action_openmaps_js = __webpack_require__(/*! ./driverapp/Rules/action/OpenMaps.js */ "./build.definitions/driverapp/Rules/action/OpenMaps.js")
let driverapp_rules_action_reportarrival_js = __webpack_require__(/*! ./driverapp/Rules/action/ReportArrival.js */ "./build.definitions/driverapp/Rules/action/ReportArrival.js")
let driverapp_rules_action_reportarrivalconfirmation_js = __webpack_require__(/*! ./driverapp/Rules/action/ReportArrivalConfirmation.js */ "./build.definitions/driverapp/Rules/action/ReportArrivalConfirmation.js")
let driverapp_rules_action_reportarrivalsign_js = __webpack_require__(/*! ./driverapp/Rules/action/ReportArrivalSign.js */ "./build.definitions/driverapp/Rules/action/ReportArrivalSign.js")
let driverapp_rules_action_reportdelay_js = __webpack_require__(/*! ./driverapp/Rules/action/ReportDelay.js */ "./build.definitions/driverapp/Rules/action/ReportDelay.js")
let driverapp_rules_action_reportdeparture_js = __webpack_require__(/*! ./driverapp/Rules/action/ReportDeparture.js */ "./build.definitions/driverapp/Rules/action/ReportDeparture.js")
let driverapp_rules_action_reportdepartureconfirmation_js = __webpack_require__(/*! ./driverapp/Rules/action/ReportDepartureConfirmation.js */ "./build.definitions/driverapp/Rules/action/ReportDepartureConfirmation.js")
let driverapp_rules_action_reportdeparturesource_js = __webpack_require__(/*! ./driverapp/Rules/action/ReportDepartureSource.js */ "./build.definitions/driverapp/Rules/action/ReportDepartureSource.js")
let driverapp_rules_action_reportevent_js = __webpack_require__(/*! ./driverapp/Rules/action/ReportEvent.js */ "./build.definitions/driverapp/Rules/action/ReportEvent.js")
let driverapp_rules_action_reportpod_js = __webpack_require__(/*! ./driverapp/Rules/action/ReportPOD.js */ "./build.definitions/driverapp/Rules/action/ReportPOD.js")
let driverapp_rules_action_stoparrvbuttonvisibility_js = __webpack_require__(/*! ./driverapp/Rules/action/StopArrvButtonVisibility.js */ "./build.definitions/driverapp/Rules/action/StopArrvButtonVisibility.js")
let driverapp_rules_action_stopdepbuttonvisibility_js = __webpack_require__(/*! ./driverapp/Rules/action/StopDepButtonVisibility.js */ "./build.definitions/driverapp/Rules/action/StopDepButtonVisibility.js")
let driverapp_rules_action_validatekeyrec_js = __webpack_require__(/*! ./driverapp/Rules/action/ValidateKeyrec.js */ "./build.definitions/driverapp/Rules/action/ValidateKeyrec.js")
let driverapp_rules_application_appupdatefailure_js = __webpack_require__(/*! ./driverapp/Rules/Application/AppUpdateFailure.js */ "./build.definitions/driverapp/Rules/Application/AppUpdateFailure.js")
let driverapp_rules_application_appupdatesuccess_js = __webpack_require__(/*! ./driverapp/Rules/Application/AppUpdateSuccess.js */ "./build.definitions/driverapp/Rules/Application/AppUpdateSuccess.js")
let driverapp_rules_application_clientismultiusermode_js = __webpack_require__(/*! ./driverapp/Rules/Application/ClientIsMultiUserMode.js */ "./build.definitions/driverapp/Rules/Application/ClientIsMultiUserMode.js")
let driverapp_rules_application_getclientsupportversions_js = __webpack_require__(/*! ./driverapp/Rules/Application/GetClientSupportVersions.js */ "./build.definitions/driverapp/Rules/Application/GetClientSupportVersions.js")
let driverapp_rules_application_getclientversion_js = __webpack_require__(/*! ./driverapp/Rules/Application/GetClientVersion.js */ "./build.definitions/driverapp/Rules/Application/GetClientVersion.js")
let driverapp_rules_application_onwillupdate_js = __webpack_require__(/*! ./driverapp/Rules/Application/OnWillUpdate.js */ "./build.definitions/driverapp/Rules/Application/OnWillUpdate.js")
let driverapp_rules_application_resetappsettingsandlogout_js = __webpack_require__(/*! ./driverapp/Rules/Application/ResetAppSettingsAndLogout.js */ "./build.definitions/driverapp/Rules/Application/ResetAppSettingsAndLogout.js")
let driverapp_rules_formatters_arrival_js = __webpack_require__(/*! ./driverapp/Rules/Formatters/Arrival.js */ "./build.definitions/driverapp/Rules/Formatters/Arrival.js")
let driverapp_rules_formatters_departure_js = __webpack_require__(/*! ./driverapp/Rules/Formatters/Departure.js */ "./build.definitions/driverapp/Rules/Formatters/Departure.js")
let driverapp_rules_formatters_destinationlocation_js = __webpack_require__(/*! ./driverapp/Rules/Formatters/DestinationLocation.js */ "./build.definitions/driverapp/Rules/Formatters/DestinationLocation.js")
let driverapp_rules_formatters_executionstatus_js = __webpack_require__(/*! ./driverapp/Rules/Formatters/ExecutionStatus.js */ "./build.definitions/driverapp/Rules/Formatters/ExecutionStatus.js")
let driverapp_rules_formatters_executionstyle_js = __webpack_require__(/*! ./driverapp/Rules/Formatters/ExecutionStyle.js */ "./build.definitions/driverapp/Rules/Formatters/ExecutionStyle.js")
let driverapp_rules_formatters_pickup_js = __webpack_require__(/*! ./driverapp/Rules/Formatters/Pickup.js */ "./build.definitions/driverapp/Rules/Formatters/Pickup.js")
let driverapp_rules_formatters_pickupdate_js = __webpack_require__(/*! ./driverapp/Rules/Formatters/PickupDate.js */ "./build.definitions/driverapp/Rules/Formatters/PickupDate.js")
let driverapp_rules_formatters_pickuptime_js = __webpack_require__(/*! ./driverapp/Rules/Formatters/PickupTime.js */ "./build.definitions/driverapp/Rules/Formatters/PickupTime.js")
let driverapp_rules_formatters_return_js = __webpack_require__(/*! ./driverapp/Rules/Formatters/Return.js */ "./build.definitions/driverapp/Rules/Formatters/Return.js")
let driverapp_rules_formatters_sourcelocation_js = __webpack_require__(/*! ./driverapp/Rules/Formatters/SourceLocation.js */ "./build.definitions/driverapp/Rules/Formatters/SourceLocation.js")
let driverapp_rules_formatters_stopaddress_js = __webpack_require__(/*! ./driverapp/Rules/Formatters/StopAddress.js */ "./build.definitions/driverapp/Rules/Formatters/StopAddress.js")
let driverapp_rules_formatters_stopstatus_js = __webpack_require__(/*! ./driverapp/Rules/Formatters/StopStatus.js */ "./build.definitions/driverapp/Rules/Formatters/StopStatus.js")
let driverapp_rules_formatters_stopstatusstyle_js = __webpack_require__(/*! ./driverapp/Rules/Formatters/StopStatusStyle.js */ "./build.definitions/driverapp/Rules/Formatters/StopStatusStyle.js")
let driverapp_rules_formatters_stoptime_js = __webpack_require__(/*! ./driverapp/Rules/Formatters/StopTime.js */ "./build.definitions/driverapp/Rules/Formatters/StopTime.js")
let driverapp_rules_logging_loglevels_js = __webpack_require__(/*! ./driverapp/Rules/Logging/LogLevels.js */ "./build.definitions/driverapp/Rules/Logging/LogLevels.js")
let driverapp_rules_logging_settracecategories_js = __webpack_require__(/*! ./driverapp/Rules/Logging/SetTraceCategories.js */ "./build.definitions/driverapp/Rules/Logging/SetTraceCategories.js")
let driverapp_rules_logging_setuserloglevel_js = __webpack_require__(/*! ./driverapp/Rules/Logging/SetUserLogLevel.js */ "./build.definitions/driverapp/Rules/Logging/SetUserLogLevel.js")
let driverapp_rules_logging_togglelogging_js = __webpack_require__(/*! ./driverapp/Rules/Logging/ToggleLogging.js */ "./build.definitions/driverapp/Rules/Logging/ToggleLogging.js")
let driverapp_rules_logging_tracecategories_js = __webpack_require__(/*! ./driverapp/Rules/Logging/TraceCategories.js */ "./build.definitions/driverapp/Rules/Logging/TraceCategories.js")
let driverapp_rules_logging_userlogsetting_js = __webpack_require__(/*! ./driverapp/Rules/Logging/UserLogSetting.js */ "./build.definitions/driverapp/Rules/Logging/UserLogSetting.js")
let driverapp_rules_main_errorarchive_checkforsyncerror_js = __webpack_require__(/*! ./driverapp/Rules/main/ErrorArchive_CheckForSyncError.js */ "./build.definitions/driverapp/Rules/main/ErrorArchive_CheckForSyncError.js")
let driverapp_rules_service_initialize_js = __webpack_require__(/*! ./driverapp/Rules/Service/Initialize.js */ "./build.definitions/driverapp/Rules/Service/Initialize.js")
let driverapp_rules_showinlinevalidationview_js = __webpack_require__(/*! ./driverapp/Rules/ShowInlineValidationView.js */ "./build.definitions/driverapp/Rules/ShowInlineValidationView.js")
let driverapp_rules_syncglobal_js = __webpack_require__(/*! ./driverapp/Rules/SyncGlobal.js */ "./build.definitions/driverapp/Rules/SyncGlobal.js")
let driverapp_services_action_service = __webpack_require__(/*! ./driverapp/Services/action.service */ "./build.definitions/driverapp/Services/action.service")
let driverapp_services_main_service = __webpack_require__(/*! ./driverapp/Services/main.service */ "./build.definitions/driverapp/Services/main.service")
let driverapp_styles_styles_css = __webpack_require__(/*! ./driverapp/Styles/Styles.css */ "./build.definitions/driverapp/Styles/Styles.css")
let driverapp_styles_styles_less = __webpack_require__(/*! ./driverapp/Styles/Styles.less */ "./build.definitions/driverapp/Styles/Styles.less")
let driverapp_styles_styles_light_css = __webpack_require__(/*! ./driverapp/Styles/Styles.light.css */ "./build.definitions/driverapp/Styles/Styles.light.css")
let driverapp_styles_styles_light_json = __webpack_require__(/*! ./driverapp/Styles/Styles.light.json */ "./build.definitions/driverapp/Styles/Styles.light.json")
let driverapp_styles_styles_light_nss = __webpack_require__(/*! ./driverapp/Styles/Styles.light.nss */ "./build.definitions/driverapp/Styles/Styles.light.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	driverapp_actions_action_service_closeoffline_action : driverapp_actions_action_service_closeoffline_action,
	driverapp_actions_action_service_closeofflinefailuremessage_action : driverapp_actions_action_service_closeofflinefailuremessage_action,
	driverapp_actions_action_service_closeofflinesuccessmessage_action : driverapp_actions_action_service_closeofflinesuccessmessage_action,
	driverapp_actions_action_service_downloadoffline_action : driverapp_actions_action_service_downloadoffline_action,
	driverapp_actions_action_service_downloadstartedmessage_action : driverapp_actions_action_service_downloadstartedmessage_action,
	driverapp_actions_action_service_initializeoffline_action : driverapp_actions_action_service_initializeoffline_action,
	driverapp_actions_action_service_initializeofflinefailuremessage_action : driverapp_actions_action_service_initializeofflinefailuremessage_action,
	driverapp_actions_action_service_reportarrivaleventconfirmation_action : driverapp_actions_action_service_reportarrivaleventconfirmation_action,
	driverapp_actions_action_service_reportdepartureeventconfirmation_action : driverapp_actions_action_service_reportdepartureeventconfirmation_action,
	driverapp_actions_action_service_reportevent_action : driverapp_actions_action_service_reportevent_action,
	driverapp_actions_action_service_reset_action : driverapp_actions_action_service_reset_action,
	driverapp_actions_action_service_syncfailuremessage_action : driverapp_actions_action_service_syncfailuremessage_action,
	driverapp_actions_action_service_syncstartedmessage_action : driverapp_actions_action_service_syncstartedmessage_action,
	driverapp_actions_action_service_uploadattachment_action : driverapp_actions_action_service_uploadattachment_action,
	driverapp_actions_action_service_uploadoffline_action : driverapp_actions_action_service_uploadoffline_action,
	driverapp_actions_application_appupdate_action : driverapp_actions_application_appupdate_action,
	driverapp_actions_application_appupdatefailuremessage_action : driverapp_actions_application_appupdatefailuremessage_action,
	driverapp_actions_application_appupdateprogressbanner_action : driverapp_actions_application_appupdateprogressbanner_action,
	driverapp_actions_application_appupdatesuccessmessage_action : driverapp_actions_application_appupdatesuccessmessage_action,
	driverapp_actions_application_logout_action : driverapp_actions_application_logout_action,
	driverapp_actions_application_navtoabout_action : driverapp_actions_application_navtoabout_action,
	driverapp_actions_application_navtoactivitylog_action : driverapp_actions_application_navtoactivitylog_action,
	driverapp_actions_application_navtosupport_action : driverapp_actions_application_navtosupport_action,
	driverapp_actions_application_onwillupdate_action : driverapp_actions_application_onwillupdate_action,
	driverapp_actions_application_reset_action : driverapp_actions_application_reset_action,
	driverapp_actions_application_resetmessage_action : driverapp_actions_application_resetmessage_action,
	driverapp_actions_application_usermenupopover_action : driverapp_actions_application_usermenupopover_action,
	driverapp_actions_closemodalpage_cancel_action : driverapp_actions_closemodalpage_cancel_action,
	driverapp_actions_closemodalpage_complete_action : driverapp_actions_closemodalpage_complete_action,
	driverapp_actions_closepage_action : driverapp_actions_closepage_action,
	driverapp_actions_console_action : driverapp_actions_console_action,
	driverapp_actions_errorarchive_errorarchive_syncfailure_action : driverapp_actions_errorarchive_errorarchive_syncfailure_action,
	driverapp_actions_errorarchive_navtoerrorarchive_detail_action : driverapp_actions_errorarchive_navtoerrorarchive_detail_action,
	driverapp_actions_errorarchive_navtoerrorarchive_list_action : driverapp_actions_errorarchive_navtoerrorarchive_list_action,
	driverapp_actions_genericbannermessage_action : driverapp_actions_genericbannermessage_action,
	driverapp_actions_genericmessagebox_action : driverapp_actions_genericmessagebox_action,
	driverapp_actions_genericnavigation_action : driverapp_actions_genericnavigation_action,
	driverapp_actions_generictoastmessage_action : driverapp_actions_generictoastmessage_action,
	driverapp_actions_logging_loguploadfailure_action : driverapp_actions_logging_loguploadfailure_action,
	driverapp_actions_logging_loguploadsuccessful_action : driverapp_actions_logging_loguploadsuccessful_action,
	driverapp_actions_logging_uploadlog_action : driverapp_actions_logging_uploadlog_action,
	driverapp_actions_logging_uploadlogprogress_action : driverapp_actions_logging_uploadlogprogress_action,
	driverapp_actions_main_service_closeoffline_action : driverapp_actions_main_service_closeoffline_action,
	driverapp_actions_main_service_closeofflinefailuremessage_action : driverapp_actions_main_service_closeofflinefailuremessage_action,
	driverapp_actions_main_service_closeofflinesuccessmessage_action : driverapp_actions_main_service_closeofflinesuccessmessage_action,
	driverapp_actions_main_service_downloadoffline_action : driverapp_actions_main_service_downloadoffline_action,
	driverapp_actions_main_service_downloadstartedmessage_action : driverapp_actions_main_service_downloadstartedmessage_action,
	driverapp_actions_main_service_initializeoffline_action : driverapp_actions_main_service_initializeoffline_action,
	driverapp_actions_main_service_initializeofflinefailuremessage_action : driverapp_actions_main_service_initializeofflinefailuremessage_action,
	driverapp_actions_main_service_syncfailuremessage_action : driverapp_actions_main_service_syncfailuremessage_action,
	driverapp_actions_main_service_syncstartedmessage_action : driverapp_actions_main_service_syncstartedmessage_action,
	driverapp_actions_main_service_uploadoffline_action : driverapp_actions_main_service_uploadoffline_action,
	driverapp_actions_navigation_to_arrival_sign_action : driverapp_actions_navigation_to_arrival_sign_action,
	driverapp_actions_navigation_to_delayevent_action : driverapp_actions_navigation_to_delayevent_action,
	driverapp_actions_navigation_to_detail_action : driverapp_actions_navigation_to_detail_action,
	driverapp_actions_navigation_to_event_action : driverapp_actions_navigation_to_event_action,
	driverapp_actions_navigation_to_stop_action : driverapp_actions_navigation_to_stop_action,
	driverapp_actions_navigation_toactivitylog_action : driverapp_actions_navigation_toactivitylog_action,
	driverapp_actions_navigation_todelvitems_action : driverapp_actions_navigation_todelvitems_action,
	driverapp_globals_application_appdefinition_version_global : driverapp_globals_application_appdefinition_version_global,
	driverapp_globals_application_applicationname_global : driverapp_globals_application_applicationname_global,
	driverapp_globals_application_supportemail_global : driverapp_globals_application_supportemail_global,
	driverapp_globals_application_supportphone_global : driverapp_globals_application_supportphone_global,
	driverapp_i18n_i18n_properties : driverapp_i18n_i18n_properties,
	driverapp_jsconfig_json : driverapp_jsconfig_json,
	driverapp_pages_application_about_page : driverapp_pages_application_about_page,
	driverapp_pages_application_support_page : driverapp_pages_application_support_page,
	driverapp_pages_application_useractivitylog_page : driverapp_pages_application_useractivitylog_page,
	driverapp_pages_arrivalevent_page : driverapp_pages_arrivalevent_page,
	driverapp_pages_attachment_page : driverapp_pages_attachment_page,
	driverapp_pages_delayevent_page : driverapp_pages_delayevent_page,
	driverapp_pages_deliverditems_page : driverapp_pages_deliverditems_page,
	driverapp_pages_detail_page : driverapp_pages_detail_page,
	driverapp_pages_errorarchive_errorarchive_detail_page : driverapp_pages_errorarchive_errorarchive_detail_page,
	driverapp_pages_errorarchive_errorarchive_list_page : driverapp_pages_errorarchive_errorarchive_list_page,
	driverapp_pages_main_page : driverapp_pages_main_page,
	driverapp_pages_podevent_page : driverapp_pages_podevent_page,
	driverapp_pages_stop_page : driverapp_pages_stop_page,
	driverapp_rules_action_createfailure_js : driverapp_rules_action_createfailure_js,
	driverapp_rules_action_createsuccess_js : driverapp_rules_action_createsuccess_js,
	driverapp_rules_action_delvremarksvisibility_js : driverapp_rules_action_delvremarksvisibility_js,
	driverapp_rules_action_errorarchive_checkforsyncerror_js : driverapp_rules_action_errorarchive_checkforsyncerror_js,
	driverapp_rules_action_ondocumentupload_js : driverapp_rules_action_ondocumentupload_js,
	driverapp_rules_action_ondocumentuploadpress_js : driverapp_rules_action_ondocumentuploadpress_js,
	driverapp_rules_action_opendelvitems_js : driverapp_rules_action_opendelvitems_js,
	driverapp_rules_action_openmaps_js : driverapp_rules_action_openmaps_js,
	driverapp_rules_action_reportarrival_js : driverapp_rules_action_reportarrival_js,
	driverapp_rules_action_reportarrivalconfirmation_js : driverapp_rules_action_reportarrivalconfirmation_js,
	driverapp_rules_action_reportarrivalsign_js : driverapp_rules_action_reportarrivalsign_js,
	driverapp_rules_action_reportdelay_js : driverapp_rules_action_reportdelay_js,
	driverapp_rules_action_reportdeparture_js : driverapp_rules_action_reportdeparture_js,
	driverapp_rules_action_reportdepartureconfirmation_js : driverapp_rules_action_reportdepartureconfirmation_js,
	driverapp_rules_action_reportdeparturesource_js : driverapp_rules_action_reportdeparturesource_js,
	driverapp_rules_action_reportevent_js : driverapp_rules_action_reportevent_js,
	driverapp_rules_action_reportpod_js : driverapp_rules_action_reportpod_js,
	driverapp_rules_action_stoparrvbuttonvisibility_js : driverapp_rules_action_stoparrvbuttonvisibility_js,
	driverapp_rules_action_stopdepbuttonvisibility_js : driverapp_rules_action_stopdepbuttonvisibility_js,
	driverapp_rules_action_validatekeyrec_js : driverapp_rules_action_validatekeyrec_js,
	driverapp_rules_application_appupdatefailure_js : driverapp_rules_application_appupdatefailure_js,
	driverapp_rules_application_appupdatesuccess_js : driverapp_rules_application_appupdatesuccess_js,
	driverapp_rules_application_clientismultiusermode_js : driverapp_rules_application_clientismultiusermode_js,
	driverapp_rules_application_getclientsupportversions_js : driverapp_rules_application_getclientsupportversions_js,
	driverapp_rules_application_getclientversion_js : driverapp_rules_application_getclientversion_js,
	driverapp_rules_application_onwillupdate_js : driverapp_rules_application_onwillupdate_js,
	driverapp_rules_application_resetappsettingsandlogout_js : driverapp_rules_application_resetappsettingsandlogout_js,
	driverapp_rules_formatters_arrival_js : driverapp_rules_formatters_arrival_js,
	driverapp_rules_formatters_departure_js : driverapp_rules_formatters_departure_js,
	driverapp_rules_formatters_destinationlocation_js : driverapp_rules_formatters_destinationlocation_js,
	driverapp_rules_formatters_executionstatus_js : driverapp_rules_formatters_executionstatus_js,
	driverapp_rules_formatters_executionstyle_js : driverapp_rules_formatters_executionstyle_js,
	driverapp_rules_formatters_pickup_js : driverapp_rules_formatters_pickup_js,
	driverapp_rules_formatters_pickupdate_js : driverapp_rules_formatters_pickupdate_js,
	driverapp_rules_formatters_pickuptime_js : driverapp_rules_formatters_pickuptime_js,
	driverapp_rules_formatters_return_js : driverapp_rules_formatters_return_js,
	driverapp_rules_formatters_sourcelocation_js : driverapp_rules_formatters_sourcelocation_js,
	driverapp_rules_formatters_stopaddress_js : driverapp_rules_formatters_stopaddress_js,
	driverapp_rules_formatters_stopstatus_js : driverapp_rules_formatters_stopstatus_js,
	driverapp_rules_formatters_stopstatusstyle_js : driverapp_rules_formatters_stopstatusstyle_js,
	driverapp_rules_formatters_stoptime_js : driverapp_rules_formatters_stoptime_js,
	driverapp_rules_logging_loglevels_js : driverapp_rules_logging_loglevels_js,
	driverapp_rules_logging_settracecategories_js : driverapp_rules_logging_settracecategories_js,
	driverapp_rules_logging_setuserloglevel_js : driverapp_rules_logging_setuserloglevel_js,
	driverapp_rules_logging_togglelogging_js : driverapp_rules_logging_togglelogging_js,
	driverapp_rules_logging_tracecategories_js : driverapp_rules_logging_tracecategories_js,
	driverapp_rules_logging_userlogsetting_js : driverapp_rules_logging_userlogsetting_js,
	driverapp_rules_main_errorarchive_checkforsyncerror_js : driverapp_rules_main_errorarchive_checkforsyncerror_js,
	driverapp_rules_service_initialize_js : driverapp_rules_service_initialize_js,
	driverapp_rules_showinlinevalidationview_js : driverapp_rules_showinlinevalidationview_js,
	driverapp_rules_syncglobal_js : driverapp_rules_syncglobal_js,
	driverapp_services_action_service : driverapp_services_action_service,
	driverapp_services_main_service : driverapp_services_main_service,
	driverapp_styles_styles_css : driverapp_styles_styles_css,
	driverapp_styles_styles_less : driverapp_styles_styles_less,
	driverapp_styles_styles_light_css : driverapp_styles_styles_light_css,
	driverapp_styles_styles_light_json : driverapp_styles_styles_light_json,
	driverapp_styles_styles_light_nss : driverapp_styles_styles_light_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/Application/AppUpdateFailure.js":
/*!***************************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/Application/AppUpdateFailure.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
  let result = clientAPI.actionResults.AppUpdate.error.toString();
  var message;
  console.log(result);
  if (result.startsWith('Error: Uncaught app extraction failure:')) {
    result = 'Error: Uncaught app extraction failure:';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
    result = 'Application instance is not up or running';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
    result = 'Service instance not found.';
  }
  switch (result) {
    case 'Service instance not found.':
      message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
      message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
      message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
      break;
    case 'Error: Uncaught app extraction failure:':
      message = 'Error extracting metadata. Please redeploy and try again.';
      break;
    case 'Application instance is not up or running':
      message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
      break;
    default:
      message = result;
      break;
  }
  return clientAPI.getPageProxy().executeAction({
    "Name": "/driverapp/Actions/Application/AppUpdateFailureMessage.action",
    "Properties": {
      "Duration": 0,
      "Message": message
    }
  });
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/Application/AppUpdateSuccess.js":
/*!***************************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/Application/AppUpdateSuccess.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}
function AppUpdateSuccess(clientAPI) {
  var message;
  // Force a small pause to let the progress banner show in case there is no new version available
  return sleep(500).then(function () {
    let result = clientAPI.actionResults.AppUpdate.data;
    console.log(result);
    let versionNum = result.split(': ')[1];
    if (result.startsWith('Current version is already up to date')) {
      return clientAPI.getPageProxy().executeAction({
        "Name": "/driverapp/Actions/Application/AppUpdateSuccessMessage.action",
        "Properties": {
          "Message": `You are already using the latest version: ${versionNum}`,
          "NumberOfLines": 2
        }
      });
    } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
      message = 'No Application metadata found. Please deploy your application and try again.';
      return clientAPI.getPageProxy().executeAction({
        "Name": "/driverapp/Actions/Application/AppUpdateSuccessMessage.action",
        "Properties": {
          "Duration": 5,
          "Message": message,
          "NumberOfLines": 2
        }
      });
    }
  });
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/Application/ClientIsMultiUserMode.js":
/*!********************************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/Application/ClientIsMultiUserMode.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientIsMultiUserMode)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ClientIsMultiUserMode(clientAPI) {
  return clientAPI.isAppInMultiUserMode();
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/Application/GetClientSupportVersions.js":
/*!***********************************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/Application/GetClientSupportVersions.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientSupportVersions)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientSupportVersions(clientAPI) {
  let versionInfo = clientAPI.getVersionInfo();
  let versionStr = '';
  Object.keys(versionInfo).forEach(function (key, index) {
    // key: the name of the object key
    // index: the ordinal position of the key within the object
    //console.log(`Key: ${key}   Index: ${index}`);
    if (key != 'Application Version') {
      versionStr += `${key}: ${versionInfo[key]}\n`;
    }
  });
  return versionStr;
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/Application/GetClientVersion.js":
/*!***************************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/Application/GetClientVersion.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientVersion)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientVersion(clientAPI) {
  let versionInfo = clientAPI.getVersionInfo();
  if (versionInfo.hasOwnProperty('Application Version')) {
    return versionInfo['Application Version'];
  }
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/Application/OnWillUpdate.js":
/*!***********************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/Application/OnWillUpdate.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
  return clientAPI.executeAction('/driverapp/Actions/Application/OnWillUpdate.action').then(result => {
    if (result.data) {
      let close_action = clientAPI.executeAction('/driverapp/Actions/action/Service/CloseOffline.action');
      let close_main = clientAPI.executeAction('/driverapp/Actions/main/Service/CloseOffline.action');
      return Promise.all([close_action, close_main]).then(() => {
        Promise.resolve();
      }).catch(err => {
        Promise.reject('Offline Odata Close Failed ' + err.message);
      });
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/Application/ResetAppSettingsAndLogout.js":
/*!************************************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/Application/ResetAppSettingsAndLogout.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ResetAppSettingsAndLogout(clientAPI) {
  let logger = clientAPI.getLogger();
  let platform = clientAPI.nativescript.platformModule;
  let appSettings = clientAPI.nativescript.appSettingsModule;
  var appId;
  if (platform && (platform.isIOS || platform.isAndroid)) {
    appId = clientAPI.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
  } else {
    appId = 'WindowsClient';
  }
  try {
    // Remove any other app specific settings
    appSettings.getAllKeys().forEach(key => {
      if (key.substring(0, appId.length) === appId) {
        appSettings.remove(key);
      }
    });
  } catch (err) {
    logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
  } finally {
    // Logout 
    return clientAPI.getPageProxy().executeAction('/driverapp/Actions/Application/Reset.action');
  }
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/Formatters/Arrival.js":
/*!*****************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/Formatters/Arrival.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Arrival)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function Arrival(clientAPI) {
  let dt = clientAPI.binding.pln_arr_dt;
  let ti = clientAPI.binding.pln_arr_ti;
  let time = new Date(Number(dt.substr(0, 4)), Number(dt.substr(4, 2)) - 1, Number(dt.substr(6, 2)), Number(ti.substr(0, 2)), Number(ti.substr(2, 2)), Number(ti.substr(4, 2)), 0);
  var text = clientAPI.formatDatetime(time);
  if (!dt || !ti) return 'Arrival : TBD';
  return `Arrival : ${text}`;
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/Formatters/Departure.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/Formatters/Departure.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Departure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function Departure(clientAPI) {
  let dt = clientAPI.binding.pln_dep_dt;
  let ti = clientAPI.binding.pln_dep_ti;
  let time = new Date(Number(dt.substr(0, 4)), Number(dt.substr(4, 2)) - 1, Number(dt.substr(6, 2)), Number(ti.substr(0, 2)), Number(ti.substr(2, 2)), Number(ti.substr(4, 2)), 0);
  var text = clientAPI.formatDatetime(time);
  if (!dt || !ti) return 'Departure : TBD';
  return `Departure : ${text}`;
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/Formatters/DestinationLocation.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/Formatters/DestinationLocation.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DestionationLocation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DestionationLocation(clientAPI) {
  let {
    des_name,
    des_house_num,
    des_street,
    des_city,
    des_post_code,
    des_region,
    des_country
  } = clientAPI.binding;
  return `${des_name},\n${des_house_num},${des_street},\n${des_city}-${des_post_code},${des_region},${des_country}`;
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/Formatters/ExecutionStatus.js":
/*!*************************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/Formatters/ExecutionStatus.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormatExecutionStatus)
/* harmony export */ });
function FormatExecutionStatus(context) {
  let execution = context.getBindingObject().execution;
  switch (execution) {
    case '04':
      return context.localizeText('xtit_orderstatus_completed');
    case '03':
      return context.localizeText('xtit_orderstatus_execution');
    case '07':
      return context.localizeText('xtit_orderstatus_ready');
    case '02':
      return context.localizeText('xtit_orderstatus_notstarted');
    case '08':
      return context.localizeText('xtit_orderstatus_notready');
    default:
      return execution;
  }
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/Formatters/ExecutionStyle.js":
/*!************************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/Formatters/ExecutionStyle.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormatExecutionStyle)
/* harmony export */ });
function FormatExecutionStyle(clientAPI) {
  let execution = clientAPI.binding.execution;
  switch (execution) {
    case '04':
      return 'Success';
    case '03':
      return 'Default';
    case '07':
      return 'Warning';
    case '02':
    case '08':
      return 'Danger';
    default:
      return 'Default';
  }
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/Formatters/Pickup.js":
/*!****************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/Formatters/Pickup.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormatPickup)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function FormatPickup(context) {
  let dt = context.getBindingObject().pln_dep_dt;
  let ti = context.getBindingObject().pln_dep_ti;
  // let time = new Date(Number(dt.substr(0, 4)), Number(dt.substr(4, 2)) - 1, Number(dt.substr(6, 2)), 0);
  let time = new Date(Number(dt.substr(0, 4)), Number(dt.substr(4, 2)) - 1, Number(dt.substr(6, 2)), Number(ti.substr(0, 2)), Number(ti.substr(2, 2)), Number(ti.substr(4, 2)), 0);
  var text = context.formatDate(time);
  return `On: ${text}`;
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/Formatters/PickupDate.js":
/*!********************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/Formatters/PickupDate.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormatPickup)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function FormatPickup(context) {
  let dt = context.getBindingObject().pln_dep_dt;
  let ti = context.getBindingObject().pln_dep_ti;
  // let time = new Date(Number(dt.substr(0, 4)), Number(dt.substr(4, 2)) - 1, Number(dt.substr(6, 2)), 0);
  let time = new Date(Number(dt.substr(0, 4)), Number(dt.substr(4, 2)) - 1, Number(dt.substr(6, 2)), Number(ti.substr(0, 2)), Number(ti.substr(2, 2)), Number(ti.substr(4, 2)), 0);
  let text = context.formatDate(time);
  return `On: ${text}`;
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/Formatters/PickupTime.js":
/*!********************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/Formatters/PickupTime.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormatPickupTime)
/* harmony export */ });
function FormatPickupTime(context) {
  let dt = context.getBindingObject().pln_dep_dt;
  let ti = context.getBindingObject().pln_dep_ti;
  let time = new Date(Number(dt.substr(0, 4)), Number(dt.substr(4, 2)) - 1, Number(dt.substr(6, 2)), Number(ti.substr(0, 2)), Number(ti.substr(2, 2)), Number(ti.substr(4, 2)), 0);
  var text = context.formatTime(time);
  return `At: ${text}`;
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/Formatters/Return.js":
/*!****************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/Formatters/Return.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormatReturn)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function FormatReturn(context) {
  let dt = context.getBindingObject().pln_arr_dt;
  let ti = context.getBindingObject().pln_arr_ti;
  let time = new Date(Number(dt.substr(0, 4)), Number(dt.substr(4, 2)) - 1, Number(dt.substr(6, 2)), Number(ti.substr(0, 2)), Number(ti.substr(2, 2)), Number(ti.substr(4, 2)), 0);
  var text = context.formatDatetime(time);
  return text;
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/Formatters/SourceLocation.js":
/*!************************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/Formatters/SourceLocation.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SourceLocation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function SourceLocation(clientAPI) {
  let {
    src_name,
    src_house_num,
    src_street,
    src_city,
    src_post_code,
    src_region,
    src_country
  } = clientAPI.binding;
  return `${src_name},\n${src_house_num},${src_street},\n${src_city}-${src_post_code},${src_region},${src_country}`;
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/Formatters/StopAddress.js":
/*!*********************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/Formatters/StopAddress.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StopAddress)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function StopAddress(clientAPI) {
  let {
    name,
    house_num,
    street,
    city,
    post_code,
    region,
    country
  } = clientAPI.binding;
  return `${name},\n${house_num},${street},\n${city}-${post_code},${region},${country}`;
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/Formatters/StopStatus.js":
/*!********************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/Formatters/StopStatus.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StopStatus)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function StopStatus(clientAPI) {
  let status = clientAPI.binding.status;
  switch (status) {
    case 'Planned':
      return clientAPI.localizeText('xtit_stopstatus_planned');
    case 'At Store':
      return clientAPI.localizeText('xtit_stopstatus_atstore');
    case 'Departed':
      return clientAPI.localizeText('xtit_stopstatus_departed');
    default:
      return status;
  }
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/Formatters/StopStatusStyle.js":
/*!*************************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/Formatters/StopStatusStyle.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StopStatus)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function StopStatus(clientAPI) {
  let status = clientAPI.binding.status;
  switch (status) {
    case 'Planned':
      return 'Success';
    case 'At Store':
      return 'Default';
    case 'Departed':
      return 'Warning';
    default:
      return 'Default';
  }
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/Formatters/StopTime.js":
/*!******************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/Formatters/StopTime.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StopTime)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function StopTime(clientAPI) {
  var text_arr, text_dep;
  try {
    let dt_arr = clientAPI.binding.pln_arr_dt;
    let ti_arr = clientAPI.binding.pln_arr_ti;
    if (!dt_arr || !ti_arr) {
      text_arr = 'TBD';
    } else {
      let time_arr = new Date(Number(dt_arr.substr(0, 4)), Number(dt_arr.substr(4, 2)) - 1, Number(dt_arr.substr(6, 2)), Number(ti_arr.substr(0, 2)), Number(ti_arr.substr(2, 2)), Number(ti_arr.substr(4, 2)), 0);
      text_arr = clientAPI.formatDatetime(time_arr);
    }
    let dt_dep = clientAPI.binding.pln_dep_dt;
    let ti_dep = clientAPI.binding.pln_dep_ti;
    if (!dt_dep || !ti_dep) {
      text_dep = 'TBD';
    } else {
      let time_dep = new Date(Number(dt_dep.substr(0, 4)), Number(dt_dep.substr(4, 2)) - 1, Number(dt_dep.substr(6, 2)), Number(ti_dep.substr(0, 2)), Number(ti_dep.substr(2, 2)), Number(ti_dep.substr(4, 2)), 0);
      text_dep = clientAPI.formatDatetime(time_dep);
    }
    return `${text_arr} - ${text_dep}`;
  } catch (error) {
    return `Error`;
  }
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/Logging/LogLevels.js":
/*!****************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/Logging/LogLevels.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogLevels)
/* harmony export */ });
function LogLevels(clientAPI) {
  var levels = [];
  levels.push({
    'DisplayValue': 'Error',
    'ReturnValue': 'Error'
  });
  levels.push({
    'DisplayValue': 'Warning',
    'ReturnValue': 'Warn'
  });
  levels.push({
    'DisplayValue': 'Info',
    'ReturnValue': 'Info'
  });
  levels.push({
    'DisplayValue': 'Debug',
    'ReturnValue': 'Debug'
  });
  levels.push({
    'DisplayValue': 'Trace',
    'ReturnValue': 'Trace'
  });
  return levels;
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/Logging/SetTraceCategories.js":
/*!*************************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/Logging/SetTraceCategories.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetTraceCategories)
/* harmony export */ });
function SetTraceCategories(clientAPI) {
  var logger = clientAPI.getLogger();
  const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
  const fcsection = sectionedTable.getSection('FormCellSection0');
  const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
  const odataTrace = fcsection.getControl('odataTrace');
  try {
    if (traceCategory.getValue()) {
      var values = traceCategory.getValue();
      var categories = [];
      if (values && values.length) {
        categories = values.map(value => {
          return 'mdk.trace.' + value.ReturnValue;
        });
      }
      clientAPI.setDebugSettings(odataTrace.getValue(), true, categories);
    }
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/Logging/SetUserLogLevel.js":
/*!**********************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/Logging/SetUserLogLevel.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetUserLogLevel)
/* harmony export */ });
function SetUserLogLevel(clientAPI) {
  try {
    if (clientAPI.getValue() && clientAPI.getValue()[0]) {
      var logger = clientAPI.getLogger();
      var listPickerValue = clientAPI.getValue()[0].ReturnValue;
      if (listPickerValue) {
        switch (listPickerValue) {
          case 'Debug':
            logger.setLevel('Debug');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Error':
            logger.setLevel('Error');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Warn':
            logger.setLevel('Warn');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Info':
            logger.setLevel('Info');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Trace':
            logger.setLevel('Trace');
            ShowTraceOptions(clientAPI, true);
            break;
          default:
            // eslint-disable-next-line no-console
            console.log(`unrecognized key ${listPickerValue}`);
        }
        return listPickerValue;
      }
    }
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}
function ShowTraceOptions(clientAPI, tracingEnabled) {
  let categories = clientAPI.getPageProxy().getControl('SectionedTable').getControl('TracingCategoriesListPicker');
  let odataTrace = clientAPI.getPageProxy().getControl('SectionedTable').getControl('odataTrace');
  categories.setVisible(tracingEnabled);
  odataTrace.setVisible(tracingEnabled);
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/Logging/ToggleLogging.js":
/*!********************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/Logging/ToggleLogging.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleLogging)
/* harmony export */ });
function ToggleLogging(clientAPI) {
  try {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
    const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
    let switchValue = enableLogSwitch.getValue();
    if (switchValue) {
      logger.on();
      logLevelListPicker.setVisible(true);
      logLevelListPicker.setEditable(true);
      logLevelListPicker.redraw();
    } else {
      logger.off();
      logLevelListPicker.setEditable(false);
      logLevelListPicker.setVisible(false);
      logLevelListPicker.redraw();
    }
    return switchValue;
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/Logging/TraceCategories.js":
/*!**********************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/Logging/TraceCategories.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TraceCategories)
/* harmony export */ });
function TraceCategories(clientAPI) {
  var categories = ['action', 'api', 'app', 'binding', 'branding', 'core', 'i18n', 'lcms', 'logging', 'odata', 'onboarding', 'profiling', 'push', 'restservice', 'settings', 'targetpath', 'ui'];
  var values = [];
  categories.forEach(category => {
    values.push({
      'DisplayValue': category,
      'ReturnValue': category
    });
  });
  return values;
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/Logging/UserLogSetting.js":
/*!*********************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/Logging/UserLogSetting.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLogSetting)
/* harmony export */ });
function UserLogSetting(clientAPI) {
  try {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
    const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
    const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
    const odataTrace = fcsection.getControl('odataTrace');

    //Persist the user logging preferences
    if (logger) {
      console.log("in logger state");
      if (logger.isTurnedOn()) {
        if (enableLogSwitch) {
          enableLogSwitch.setValue(true);
        }
        if (logLevelListPicker) {
          logLevelListPicker.setEditable(true);
        }
      } else {
        if (enableLogSwitch) {
          enableLogSwitch.setValue(false);
        }
        if (logLevelListPicker) {
          logLevelListPicker.setEditable(false);
        }
      }
      var logLevel = logger.getLevel();
      if (logLevel) {
        if (logLevelListPicker) {
          logLevelListPicker.setValue([logLevel]);
        }
      }
      if (logLevel === 'Trace') {
        traceCategory.setVisible(true);
        odataTrace.setVisible(true);
      }

      //Upon selecting a value in the List picker and clicking the back button 
      //will enable the onload page rule. This will set the selected value
      //in the control
      if (logLevelListPicker.getValue()[0]) {
        var returnValue = logLevelListPicker.getValue()[0].ReturnValue;
        if (returnValue) {
          logLevelListPicker.setValue([returnValue]);
          logger.setLevel(returnValue);
        }
      }
    }
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(String(exception), 'Error User Logger could not be set');
  }
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/Service/Initialize.js":
/*!*****************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/Service/Initialize.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Initialize)
/* harmony export */ });
function Initialize(context) {
  // Perform pre data initialization task

  // Initialize all your Data sources
  let _action = context.executeAction('/driverapp/Actions/action/Service/InitializeOffline.action');
  let _main = context.executeAction('/driverapp/Actions/main/Service/InitializeOffline.action');

  //You can add more service initialize actions here

  return Promise.all([_action, _main]).then(() => {
    // After Initializing the DB connections

    // Display successful initialization  message to the user
    return context.executeAction({
      "Name": "/driverapp/Actions/GenericToastMessage.action",
      "Properties": {
        "Message": "Application Services Initialized",
        "Animated": true,
        "Duration": 1,
        "IsIconHidden": true,
        "NumberOfLines": 1
      }
    });
  }).catch(() => {
    return false;
  });
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/ShowInlineValidationView.js":
/*!***********************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/ShowInlineValidationView.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShowInlineValidationView)
/* harmony export */ });
/**
 * @param {IClientAPI} clientAPI
 * @param {IFormCellProxy} control
 * @param {string} errorText
 * @param {boolean} isHidden 
 */
// export default function ShowInlineValidationView(clientAPI, control, errorText, isHidden = false) {
//     control.getValidation().setMessage(errorText);
//     control.getValidation().setVisible(!isHidden);
//     if (!clientAPI.nativescript.platformModule.isAndroid) {
//         control.getValidation().setSeparatorVisible(!isHidden);
//     }
//     control.redraw();
// }

function ShowInlineValidationView(clientAPI, control, errorText, isHidden = false) {
  control.setValidationProperty("ValidationMessage", errorText);
  control.setValidationProperty("ValidationViewIsHidden", isHidden);
  // no color for message text and background color required for Android
  if (!clientAPI.nativescript.platformModule.isAndroid) {
    control.setValidationProperty("ValidationMessageColor", "5b738b");
    control.setValidationProperty("ValidationViewBackgroundColor", "fbebf3");
    // no separator required for Android + Web
    if (clientAPI.nativescript.platformModule.isIOS) {
      control.setValidationProperty("SeparatorIsHidden", isHidden);
      control.setValidationProperty("SeparatorBackgroundColor", "d20a0a");
    }
  }
  control.applyFormCellValidation();
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/SyncGlobal.js":
/*!*********************************************************!*\
  !*** ./build.definitions/driverapp/Rules/SyncGlobal.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SyncGlobal)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function SyncGlobal(context) {
  let _action = context.executeAction('/driverapp/Actions/action/Service/SyncStartedMessage.action');
  let _main = context.executeAction('/driverapp/Actions/main/Service/SyncStartedMessage.action');

  //You can add more service initialize actions here

  return Promise.all([_action, _main]).then(() => {
    // After Initializing the DB connections

    // Display successful initialization  message to the user
    return context.executeAction({
      "Name": "/driverapp/Actions/GenericToastMessage.action",
      "Properties": {
        "Message": "Sync completed",
        "Animated": true,
        "Duration": 1,
        "IsIconHidden": true,
        "NumberOfLines": 1
      }
    });
  }).catch(() => {
    return false;
  });
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/action/CreateFailure.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/action/CreateFailure.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function CreateFailure(clientAPI) {
  alert("Failure");
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/action/CreateSuccess.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/action/CreateSuccess.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function CreateSuccess(clientAPI) {
  alert("Success");
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/action/DelvRemarksVisibility.js":
/*!***************************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/action/DelvRemarksVisibility.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DelvRemarksVisibility)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DelvRemarksVisibility(clientAPI) {
  let context = clientAPI.getPageProxy();
  let evtreason = context.evaluateTargetPath("#Control:EventReason/#SelectedValue");
  let remark = context.evaluateTargetPath("#Control:Remarks");
  //Validation
  if (!evtreason) {
    alert("Please select the delivery");
    return;
  }
  //Set Remarks Visibility
  if (evtreason === `Delivered- With Exceptions`) {
    remark.setVisible(true);
  } else {
    remark.setVisible(false);
  }
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/action/ErrorArchive_CheckForSyncError.js":
/*!************************************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/action/ErrorArchive_CheckForSyncError.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckForSyncError)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} context
 */
function CheckForSyncError(context) {
  context.count('/driverapp/Services/action.service', 'ErrorArchive', '').then(errorCount => {
    if (errorCount > 0) {
      return context.getPageProxy().executeAction('/driverapp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action').then(function () {
        return Promise.reject(false);
      });
    }
  });
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/action/OnDocumentUpload.js":
/*!**********************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/action/OnDocumentUpload.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnDocumentUpload)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
async function OnDocumentUpload(clientAPI) {
  const context = clientAPI.getPageProxy();
  // context.showActivityIndicator("Processing .......")
  let {
    tor_id,
    locid
  } = clientAPI.binding;
  const attachmentFormCell = clientAPI.evaluateTargetPathForAPI("#Page:Stop/#Control:AttachmentFormCell");
  const attachmentList = clientAPI.evaluateTargetPath('#Page:Stop/#Control:AttachmentFormCell/#Value');
  if (attachmentList.length > 1) {
    alert("Upload one attachment at a time");
    return;
  }
  const attachment = attachmentList[0];
  const fileName = attachment.urlString.match(/(.+)\/(.+\..+)$/)[2];
  const slug = {
    tor_id: tor_id,
    description: fileName,
    attachment_type: clientAPI.evaluateTargetPath('#Control:AttachmentType/#SelectedValue') ?? 'ATCMT',
    alternative_name: fileName,
    folder: locid
  };
  let token;
  let targetUrl = `/action/AttachmentSet`;
  try {
    context.dismissActivityIndicator();
    context.showActivityIndicator("Uploading attachment...");
    let response = await context.sendRequest(`/action`, {
      "method": "GET",
      'header': {
        "x-csrf-token": "fetch"
      }
    });
    token = response.headers["x-csrf-token"];
    return context.sendRequest(targetUrl, {
      "method": "POST",
      'header': {
        "Content-Type": attachment.contentType,
        "x-csrf-token": token,
        "Slug": encodeURI(JSON.stringify(slug))
      },
      "body": attachment.content
    }).then(() => {
      context.dismissActivityIndicator();
      alert("Successfully uploaded");
      attachmentFormCell.setValue([]);
      return context.executeAction("/driverapp/Actions/ClosePage.action");
    }).catch(err => {
      context.dismissActivityIndicator();
      alert(`Failed to upload ${err}`);
      attachmentFormCell.setValue([]);
      return context.executeAction("/driverapp/Actions/ClosePage.action");
    });
  } catch (error) {
    alert(error);
    context.dismissActivityIndicator();
    attachmentFormCell.setValue([]);
    return context.executeAction("/driverapp/Actions/ClosePage.action");
  }
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/action/OnDocumentUploadPress.js":
/*!***************************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/action/OnDocumentUploadPress.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnDocumentUpload)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
async function OnDocumentUpload(clientAPI) {
  const context = clientAPI.getPageProxy();
  let {
    tor_id,
    locid
  } = clientAPI.binding;
  const attachmentFormCell = clientAPI.evaluateTargetPathForAPI("#Page:DetailPage/#Control:AttachmentFormCell");
  if (attachmentFormCell.getValue().length > 0) {}
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/action/OpenDelvItems.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/action/OpenDelvItems.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OpenDelvItems)
/* harmony export */ });
/**
 * Navigates to the Delivered Items when a delivery is selected from POD page
 * @param {IClientAPI} clientAPI
 */
function OpenDelvItems(clientAPI) {
  let context = clientAPI.getPageProxy();
  //Get Selected Value
  let delv_num = context.evaluateTargetPath("#Control:Delivery/#Value");

  //Validate if selected atleast one delivery
  if (delv_num === null || delv_num === undefined || delv_num === '' || delv_num === 'None' || typeof delv_num === 'object' && Object.keys(delv_num).length === 0) {
    alert("Please select a Delivery!!");
    return;
  } else {
    //Navigate to Delivered Items
    return context.executeAction("/driverapp/Actions/Navigation/ToDelvItems.action");
  }
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/action/OpenMaps.js":
/*!**************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/action/OpenMaps.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OpenMaps)
/* harmony export */ });
/**
 * Opens native maps for navigation to a location using xpos (longitude) and ypos (latitude).
 * Supports both Android and iOS.
 * @param {IClientAPI} clientAPI
 */
function OpenMaps(clientAPI) {
  let {
    city,
    xpos,
    ypos
  } = clientAPI.binding;
  let context = clientAPI.getPageProxy();

  // Convert comma to period for proper float parsing
  let longitude = parseFloat(xpos.toString().replace(',', '.'));
  let latitude = parseFloat(ypos.toString().replace(',', '.'));

  // Validate coordinates
  if (!latitude || !longitude) {
    console.log("Missing location coordinates (xpos/ypos)");
    alert("Missing location coordinates!!!");
    context.dismissActivityIndicator();
    return;
  }
  // Use proper context reference
  const utilsModule = clientAPI.nativescript.utilsModule;
  const platformModule = clientAPI.nativescript.platformModule;
  let url = '';
  if (platformModule.isIOS) {
    url = `http://maps.apple.com/?daddr=${latitude},${longitude}`;
  } else if (platformModule.isAndroid) {
    url = `http://maps.google.com/maps?daddr=${latitude},${longitude}`;
  } else {
    url = `https://maps.google.com/maps?daddr=${latitude},${longitude}`;
  }

  // Open map
  console.log(`Opening map at: ${url}`);
  utilsModule.openUrl(url);

  // Dismiss activity indicator if shown earlier
  context.dismissActivityIndicator();
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/action/ReportArrival.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/action/ReportArrival.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReportArrival)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ReportArrival(clientAPI) {
  let {
    tor_id,
    name,
    locid,
    stop_id
  } = clientAPI.binding;
  let context = clientAPI.getPageProxy();
  context.showActivityIndicator("Reporting Event......");
  context.setActionBinding({
    tor_id: tor_id,
    event_code: 'ARRIV_DEST',
    event_reason: '',
    ext_loc_id: locid,
    event_time: '' + new Date().getTime()
  });
  try {
    return context.executeAction("/driverapp/Actions/action/Service/ReportEvent.action").then(() => {
      return context.executeAction("/driverapp/Actions/ClosePage.action").then(() => {
        context.dismissActivityIndicator();
        return context.executeAction({
          Name: "/driverapp/Actions/Console.action",
          Properties: {
            Message: "Event Reported successfully. Kindly refresh the app to sync"
          }
        });
      }).catch(err => {
        context.dismissActivityIndicator();
      });
    }).catch(err => {
      context.dismissActivityIndicator();
    });
  } catch (error) {
    context.dismissActivityIndicator();
  }
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/action/ReportArrivalConfirmation.js":
/*!*******************************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/action/ReportArrivalConfirmation.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReportArrivalConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ReportArrivalConfirmation(clientAPI) {
  let stop = clientAPI.binding.name;
  let message = `Reporting Arrival at location ${stop}`;
  let context = clientAPI.getPageProxy();
  context.setActionBinding({
    'message': message
  });
  return context.executeAction("/driverapp/Actions/action/Service/ReportArrivalEventConfirmation.action");
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/action/ReportArrivalSign.js":
/*!***********************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/action/ReportArrivalSign.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReportArrivalSign)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
async function ReportArrivalSign(clientAPI) {
  let {
    tor_id,
    name,
    locid,
    stop_id
  } = clientAPI.binding; //Get bindings from page
  let context = clientAPI.getPageProxy();
  context.showActivityIndicator("Processing .......");
  //Get Signature Value
  let signature = context.evaluateTargetPath("#Control:SignatureArrv/#Value");

  //Validation
  if (!signature) {
    alert("Signature required!!!");
    context.dismissActivityIndicator();
    return;
  }
  let token;
  let targetUrl = `/action/AttachmentSet`;
  try {
    let response = await context.sendRequest(`/action`, {
      "method": "GET",
      'header': {
        "x-csrf-token": "fetch"
      }
    });
    token = response.headers["x-csrf-token"];
  } catch (error) {
    alert(error);
    context.dismissActivityIndicator();
  }
  context.setActionBinding({
    tor_id: tor_id,
    event_code: 'ARRIV_DEST',
    event_reason: '',
    ext_loc_id: locid,
    event_time: '' + new Date().getTime()
  });
  const slug = {
    tor_id: tor_id,
    description: locid + "_Driver_Sign",
    attachment_type: 'ZSIG',
    alternative_name: 'Arrival-Signature',
    folder: locid,
    delv_number: '',
    keyrec: '',
    recipient: ''
  };
  context.dismissActivityIndicator(); //End of Processing
  context.showActivityIndicator("Reporting Event......");
  return context.executeAction("/driverapp/Actions/action/Service/ReportEvent.action").then(() => {
    context.dismissActivityIndicator();
    context.showActivityIndicator("Uploading signature");
    return context.sendRequest(targetUrl, {
      "method": "POST",
      'header': {
        "Content-Type": signature.contentType,
        "x-csrf-token": token,
        "Slug": encodeURI(JSON.stringify(slug))
      },
      "body": signature.content
    }).then(() => {
      alert("Successfully uploaded");
      context.dismissActivityIndicator();
      return context.executeAction("/driverapp/Actions/ClosePage.action");
    }).catch(err => {
      alert(`Failed to upload ${err}`);
      context.dismissActivityIndicator();
      return context.executeAction("/driverapp/Actions/ClosePage.action");
    });
  }).catch(err => {
    alert(`Failed to report event ${err}`);
    context.dismissActivityIndicator();
  }).finally(() => {
    context.dismissActivityIndicator();
    return context.executeAction("/driverapp/Actions/ClosePage.action");
  });
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/action/ReportDelay.js":
/*!*****************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/action/ReportDelay.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReportDelay)
/* harmony export */ });
/* harmony import */ var _ReportEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportEvent */ "./build.definitions/driverapp/Rules/action/ReportEvent.js");


/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
async function ReportDelay(clientAPI) {
  let {
    tor_id,
    name,
    locid,
    stop_id
  } = clientAPI.binding; //Get bindings from page
  let context = clientAPI.getPageProxy();
  context.showActivityIndicator("Reporting Event .......");
  //Get Selected Value
  let delay_reason = context.evaluateTargetPath("#Control:Delay_Reason/#SelectedValue");

  //Validation
  if (!delay_reason) {
    alert("Delay Reason required!!!");
    context.dismissActivityIndicator();
  }
  //Set Binding
  context.setActionBinding({
    tor_id: tor_id,
    event_code: 'DELAYED',
    event_reason: delay_reason,
    ext_loc_id: locid,
    event_time: '' + new Date().getTime()
  });

  //context.showActivityIndicator();

  return context.executeAction("/driverapp/Actions/action/Service/ReportEvent.action").then(() => {
    return context.executeAction("/driverapp/Actions/ClosePage.action");
  }).then(() => {
    context.dismissActivityIndicator();
    return context.executeAction({
      Name: "/driverapp/Actions/Console.action",
      Properties: {
        Message: "Event Reported successfully. Kindly refresh the app to sync"
      }
    });
  }).catch(error => {
    context.dismissActivityIndicator();
    alert(`Failed to report event: ${error}`);
  });
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/action/ReportDeparture.js":
/*!*********************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/action/ReportDeparture.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReportDeparture)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ReportDeparture(clientAPI) {
  let {
    tor_id,
    name,
    locid,
    stop_id
  } = clientAPI.binding;
  let context = clientAPI.getPageProxy();
  context.showActivityIndicator("Reporting Event......");
  context.setActionBinding({
    tor_id: tor_id,
    event_code: 'DEPARTURE',
    event_reason: '',
    ext_loc_id: locid,
    event_time: '' + new Date().getTime()
  });
  try {
    return context.executeAction("/driverapp/Actions/action/Service/ReportEvent.action").then(() => {
      return context.executeAction("/driverapp/Actions/ClosePage.action").then(() => {
        context.dismissActivityIndicator();
        return context.executeAction({
          Name: "/driverapp/Actions/Console.action",
          Properties: {
            Message: "Event Reported successfully. Kindly refresh the app to sync"
          }
        });
      });
    });
  } catch (error) {
    context.dismissActivityIndicator();
  }
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/action/ReportDepartureConfirmation.js":
/*!*********************************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/action/ReportDepartureConfirmation.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReportDepartureConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ReportDepartureConfirmation(clientAPI) {
  let stop = clientAPI.binding.name;
  let message = `Reporting Departure at location ${stop}`;
  let context = clientAPI.getPageProxy();
  context.setActionBinding({
    'message': message
  });
  return context.executeAction("/driverapp/Actions/action/Service/ReportDepartureEventConfirmation.action");
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/action/ReportDepartureSource.js":
/*!***************************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/action/ReportDepartureSource.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReportDeparture)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ReportDeparture(clientAPI) {
  let {
    tor_id,
    src_locid
  } = clientAPI.binding;
  let context = clientAPI.getPageProxy();
  context.showActivityIndicator("Reporting Event......");
  context.setActionBinding({
    tor_id: tor_id,
    event_code: 'DEPARTURE',
    event_reason: '',
    ext_loc_id: src_locid,
    event_time: '' + new Date().getTime()
  });
  try {
    return context.executeAction("/driverapp/Actions/action/Service/ReportEvent.action").then(() => {
      return context.executeAction("/driverapp/Actions/ClosePage.action").then(() => {
        context.dismissActivityIndicator();
        return context.executeAction({
          Name: "/driverapp/Actions/Console.action",
          Properties: {
            Message: "Event Reported successfully. Kindly refresh the app to sync"
          }
        });
      }).catch(err => {
        context.dismissActivityIndicator();
      });
    }).catch(err => {
      context.dismissActivityIndicator();
    });
  } catch (error) {
    context.dismissActivityIndicator();
  }
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/action/ReportEvent.js":
/*!*****************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/action/ReportEvent.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReportEvent)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ReportEvent(clientAPI) {
  alert("Done");
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/action/ReportPOD.js":
/*!***************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/action/ReportPOD.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReportPOD)
/* harmony export */ });
/**
 * Reports the POD event/Attach the Customer signature
 * @param {IClientAPI} clientAPI
 */
async function ReportPOD(clientAPI) {
  //Declaration
  let context = clientAPI.getPageProxy();
  let {
    tor_id,
    name,
    locid,
    stop_id
  } = clientAPI.binding;
  let event_reason, signature, recipient, keyrec, delivery, remarks;
  try {
    context.showActivityIndicator("Processing .......");

    //Get UI values
    event_reason = context.evaluateTargetPath("#Control:EventReason/#SelectedValue");
    signature = context.evaluateTargetPath("#Control:SignatureSrc/#Value");
    recipient = context.evaluateTargetPath("#Control:Cust_name/#Value");
    keyrec = context.evaluateTargetPath("#Control:KeyRec/#Value");
    delivery = context.evaluateTargetPath("#Control:Delivery/#SelectedValue");
    remarks = context.evaluateTargetPath("#Control:Remarks/#Value");
  } catch (error) {
    context.dismissActivityIndicator();
    const errMsg = error?.message || String(error);
    if (errMsg.includes("No value in the selected element")) {
      alert("Please make sure all required fields are filled in.");
    } else {
      alert("Unexpected error: " + errMsg);
    }
    return;
  }

  //Validation
  if (!event_reason || event_reason === "") {
    alert("Select an Event Reason!!!");
    context.dismissActivityIndicator();
    return;
  }
  if (!signature) {
    alert("Signature required!!!");
    context.dismissActivityIndicator();
    return;
  }
  if (!recipient) {
    alert("Enter the recipient name");
    context.dismissActivityIndicator();
    return;
  }
  if (!keyrec) {
    alert("KeyRec required!!!");
    context.dismissActivityIndicator();
    return;
  }
  // Fetch CSRF Token
  let token;
  let targetUrl = `/action/AttachmentSet`;
  try {
    let response = await context.sendRequest(`/action`, {
      "method": "GET",
      'header': {
        "x-csrf-token": "fetch"
      }
    });
    token = response.headers["x-csrf-token"] || response.headers.get("x-csrf-token");
    if (!token) throw new Error("CSRF token missing");
  } catch (err) {
    alert(`CSRF fetch failed: ${err.message || err}`);
    context.dismissActivityIndicator();
    return;
  }

  // Set action binding for ReportEvent
  context.setActionBinding({
    tor_id: tor_id,
    event_code: 'POD',
    event_reason: event_reason,
    ext_loc_id: locid,
    event_time: '' + new Date().getTime(),
    Keyrec: keyrec,
    recipient: recipient,
    DelvRemarks: remarks
  });
  const slug = {
    tor_id: tor_id,
    description: locid + "_Recipient_Sign",
    attachment_type: 'ZSIG',
    alternative_name: 'POD-Signature',
    folder: locid,
    delv_number: delivery,
    keyrec: keyrec,
    recipient: recipient
  };
  context.dismissActivityIndicator();
  context.showActivityIndicator("Reporting Event......");
  return context.executeAction("/driverapp/Actions/action/Service/ReportEvent.action").then(() => {
    context.dismissActivityIndicator();
    context.showActivityIndicator("Uploading signature");
    return context.sendRequest(targetUrl, {
      "method": "POST",
      'header': {
        "Content-Type": signature.contentType,
        "x-csrf-token": token,
        "Slug": encodeURI(JSON.stringify(slug))
      },
      "body": signature.content
    }).then(() => {
      alert("Successfully uploaded");
    }).catch(err => {
      alert(`Failed to upload: ${err.message || err}`);
    });
  }).catch(err => {
    alert(`Failed to report event: ${err.message || err}`);
  }).finally(() => {
    context.dismissActivityIndicator();
    return context.executeAction("/driverapp/Actions/ClosePage.action");
  });
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/action/StopArrvButtonVisibility.js":
/*!******************************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/action/StopArrvButtonVisibility.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StopArrvButtonVisibility)
/* harmony export */ });
/**
 * Hide Arrival and Departure buttons on page load
 * @param {IClientAPI} clientAPI
 */
function StopArrvButtonVisibility(clientAPI) {
  // Hide button if stopseq is 'F' (First)
  if (clientAPI.binding.seqpos === 'F') {
    return false;
  } else {
    // Otherwise, show the button
    return true;
  }
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/action/StopDepButtonVisibility.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/action/StopDepButtonVisibility.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StopDepButtonVisibility)
/* harmony export */ });
/**
 * Hide the Departure buttons based on Stop Sequence
 * @param {IClientAPI} clientAPI
 */
function StopDepButtonVisibility(clientAPI) {
  // Hide button if stopseq is 'L' (Last)
  if (clientAPI.binding.seqpos === 'L') {
    return false;
  } else {
    // Otherwise, show the button
    return true;
  }
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/action/ValidateKeyrec.js":
/*!********************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/action/ValidateKeyrec.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ValidateKeyrec)
/* harmony export */ });
/* harmony import */ var _ShowInlineValidationView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ShowInlineValidationView */ "./build.definitions/driverapp/Rules/ShowInlineValidationView.js");
// import ShowInlineValidationView from "../ShowInlineValidationView";

// /**
//  * Check keyrec is entered based on Payee from FU   
//  * @param {IClientAPI} clientAPI
//  */
// export default function ValidateKeyrec(clientAPI) {
// //     const control = clientAPI.evaluateTargetPath("#Page:-Current/#Control:KeyRec");
// //     const keyrecinput = control.getValue();

// //     // Validate if KeyRec is not empty
// //     if (!keyrecinput) {
// //         ShowInlineValidationView(clientAPI, control, "This field is required.");
// //         return;
// //     }

// //     // Validation is successful - Clear validation message
// //     ShowInlineValidationView(clientAPI, control, "", true);
// // }

//     const context = clientAPI.getPageProxy();
//     const value = clientAPI.evaluateTargetPath("#Page:-Current/#Control:KeyRec");

//     if (!value || value.trim() === '') {
//         context.getControl("KeyRec").applyValidationMessage("Customer name is required.");
//     } else {
//         context.getControl("KeyRec").clearValidationMessage();
//     }
// }


/**
 * Check keyrec is entered based on Payee from FU   
 * @param {IClientAPI} clientAPI
 */
function ValidateKeyrec(clientAPI) {
  const context = clientAPI.getPageProxy();
  const value = context.evaluateTargetPath("#Control:KeyRec/#Value"); // get value from control

  const control = context.getControl("KeyRec"); // get control reference properly

  if (!value || value.trim() === '') {
    control.applyValidationMessage("KeyRec is required.");
  } else {
    control.clearValidationMessage();
  }
}

/***/ }),

/***/ "./build.definitions/driverapp/Rules/main/ErrorArchive_CheckForSyncError.js":
/*!**********************************************************************************!*\
  !*** ./build.definitions/driverapp/Rules/main/ErrorArchive_CheckForSyncError.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckForSyncError)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} context
 */
function CheckForSyncError(context) {
  context.count('/driverapp/Services/main.service', 'ErrorArchive', '').then(errorCount => {
    if (errorCount > 0) {
      return context.getPageProxy().executeAction('/driverapp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action').then(function () {
        return Promise.reject(false);
      });
    }
  });
}

/***/ }),

/***/ "./build.definitions/driverapp/Styles/Styles.css":
/*!*******************************************************!*\
  !*** ./build.definitions/driverapp/Styles/Styles.css ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
.tagStyleBlue {
  font-color: #edf6fa;
  background-color: #0040b0;
}
.Pagebkg {
  color: #EBF8FF;
}
ActionBar {
  color: white;
  background-color: #06304979;
}
.ObjectTableTitle {
  font-color: #0070F2;
  background-color: #06304979;
}
.DelvItemTitle {
  font-color: white;
  background-color: #0497aabb;
  font-size: medium;
}
.MainFOTitle {
  font-color: #1b90ff;
  background-color: #edf6fa;
}
.StopTitle {
  font-color: white;
  background-color: #1a60b1;
  font-size: medium;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/driverapp/Styles/Styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC;AACD;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,cAAc;AAChB;AACA;EACE,YAAY;EACZ,2BAA2B;AAC7B;AACA;EACE,mBAAmB;EACnB,2BAA2B;AAC7B;AACA;EACE,iBAAiB;EACjB,2BAA2B;EAC3B,iBAAiB;AACnB;AACA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,iBAAiB;AACnB","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n.tagStyleBlue {\n  font-color: #edf6fa;\n  background-color: #0040b0;\n}\n.Pagebkg {\n  color: #EBF8FF;\n}\nActionBar {\n  color: white;\n  background-color: #06304979;\n}\n.ObjectTableTitle {\n  font-color: #0070F2;\n  background-color: #06304979;\n}\n.DelvItemTitle {\n  font-color: white;\n  background-color: #0497aabb;\n  font-size: medium;\n}\n.MainFOTitle {\n  font-color: #1b90ff;\n  background-color: #edf6fa;\n}\n.StopTitle {\n  font-color: white;\n  background-color: #1a60b1;\n  font-size: medium;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/driverapp/Styles/Styles.less":
/*!********************************************************!*\
  !*** ./build.definitions/driverapp/Styles/Styles.less ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
.tagStyleBlue {
    font-color: #edf6fa;
    background-color: #0040b0; 
}
//// style for Page background
.Pagebkg {
    color: #EBF8FF;
   }
//// This style applies to all the ActionBars in the application
ActionBar {
    color: white;
    background-color: #06304979; 
}
//// style for Title property of an Object Table control
.ObjectTableTitle {
    font-color: #0070F2;
    background-color: #06304979; 
   }
   .DelvItemTitle {
    font-color: white;
    background-color: #0497aabb; 
    font-size: medium;
   }
.MainFOTitle {
    font-color: #1b90ff;
    background-color:#edf6fa; 
   }
.StopTitle {
    font-color: white;
    background-color: #1a60b1; 
    font-size: medium;
   }
   
`, "",{"version":3,"sources":["webpack://./build.definitions/driverapp/Styles/Styles.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC;AACD;IACI,mBAAmB;IACnB,yBAAyB;AAC7B;AACA;;IAEI,cAAc;GACf;AACH;;IAEI,YAAY;IACZ,2BAA2B;AAC/B;AACA;;IAEI,mBAAmB;IACnB,2BAA2B;GAC5B;GACA;IACC,iBAAiB;IACjB,2BAA2B;IAC3B,iBAAiB;GAClB;AACH;IACI,mBAAmB;IACnB,wBAAwB;GACzB;AACH;IACI,iBAAiB;IACjB,yBAAyB;IACzB,iBAAiB;GAClB","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n.tagStyleBlue {\n    font-color: #edf6fa;\n    background-color: #0040b0; \n}\n//// style for Page background\n.Pagebkg {\n    color: #EBF8FF;\n   }\n//// This style applies to all the ActionBars in the application\nActionBar {\n    color: white;\n    background-color: #06304979; \n}\n//// style for Title property of an Object Table control\n.ObjectTableTitle {\n    font-color: #0070F2;\n    background-color: #06304979; \n   }\n   .DelvItemTitle {\n    font-color: white;\n    background-color: #0497aabb; \n    font-size: medium;\n   }\n.MainFOTitle {\n    font-color: #1b90ff;\n    background-color:#edf6fa; \n   }\n.StopTitle {\n    font-color: white;\n    background-color: #1a60b1; \n    font-size: medium;\n   }\n   \n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/driverapp/Styles/Styles.light.css":
/*!*************************************************************!*\
  !*** ./build.definitions/driverapp/Styles/Styles.light.css ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.ns-light .tagStyleBlue {
	font-color: #edf6fa;
	background-color: #0040b0;
}
.ns-light .Pagebkg {
	color: #EBF8FF;
}
.ns-light ActionBar {
	color: white;
	background-color: #06304979;
}
.ns-light .ObjectTableTitle {
	font-color: #0070F2;
	background-color: #06304979;
}
.ns-light .DelvItemTitle {
	font-color: white;
	background-color: #0497aabb;
	font-size: medium;
}
.ns-light .MainFOTitle {
	font-color: #1b90ff;
	background-color: #edf6fa;
}
.ns-light .StopTitle {
	font-color: white;
	background-color: #1a60b1;
	font-size: medium;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/driverapp/Styles/Styles.light.css"],"names":[],"mappings":"AAAA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;AACA;CACC,cAAc;AACf;AACA;CACC,YAAY;CACZ,2BAA2B;AAC5B;AACA;CACC,mBAAmB;CACnB,2BAA2B;AAC5B;AACA;CACC,iBAAiB;CACjB,2BAA2B;CAC3B,iBAAiB;AAClB;AACA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;AACA;CACC,iBAAiB;CACjB,yBAAyB;CACzB,iBAAiB;AAClB","sourcesContent":[".ns-light .tagStyleBlue {\n\tfont-color: #edf6fa;\n\tbackground-color: #0040b0;\n}\n.ns-light .Pagebkg {\n\tcolor: #EBF8FF;\n}\n.ns-light ActionBar {\n\tcolor: white;\n\tbackground-color: #06304979;\n}\n.ns-light .ObjectTableTitle {\n\tfont-color: #0070F2;\n\tbackground-color: #06304979;\n}\n.ns-light .DelvItemTitle {\n\tfont-color: white;\n\tbackground-color: #0497aabb;\n\tfont-size: medium;\n}\n.ns-light .MainFOTitle {\n\tfont-color: #1b90ff;\n\tbackground-color: #edf6fa;\n}\n.ns-light .StopTitle {\n\tfont-color: white;\n\tbackground-color: #1a60b1;\n\tfont-size: medium;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/driverapp/Styles/Styles.light.nss":
/*!*************************************************************!*\
  !*** ./build.definitions/driverapp/Styles/Styles.light.nss ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `tagStyleBlue {
	font-color: #edf6fa;
	background-color: #0040b0;
}
Pagebkg {
	font-color: #EBF8FF;
}
ActionBar {
	font-color: white;
	background-color: #06304979;
}
ObjectTableTitle {
	font-color: #0070F2;
	background-color: #06304979;
}
DelvItemTitle {
	font-color: white;
	background-color: #0497aabb;
	font-size: medium;
}
MainFOTitle {
	font-color: #1b90ff;
	background-color: #edf6fa;
}
StopTitle {
	font-color: white;
	background-color: #1a60b1;
	font-size: medium;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/driverapp/Styles/Styles.light.nss"],"names":[],"mappings":"AAAA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;AACA;CACC,mBAAmB;AACpB;AACA;CACC,iBAAiB;CACjB,2BAA2B;AAC5B;AACA;CACC,mBAAmB;CACnB,2BAA2B;AAC5B;AACA;CACC,iBAAiB;CACjB,2BAA2B;CAC3B,iBAAiB;AAClB;AACA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;AACA;CACC,iBAAiB;CACjB,yBAAyB;CACzB,iBAAiB;AAClB","sourcesContent":["tagStyleBlue {\n\tfont-color: #edf6fa;\n\tbackground-color: #0040b0;\n}\nPagebkg {\n\tfont-color: #EBF8FF;\n}\nActionBar {\n\tfont-color: white;\n\tbackground-color: #06304979;\n}\nObjectTableTitle {\n\tfont-color: #0070F2;\n\tbackground-color: #06304979;\n}\nDelvItemTitle {\n\tfont-color: white;\n\tbackground-color: #0497aabb;\n\tfont-size: medium;\n}\nMainFOTitle {\n\tfont-color: #1b90ff;\n\tbackground-color: #edf6fa;\n}\nStopTitle {\n\tfont-color: white;\n\tbackground-color: #1a60b1;\n\tfont-size: medium;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../../../css-loader/dist/runtime/api.js":
/*!**************************************************!*\
  !*** ../../../../css-loader/dist/runtime/api.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../../../css-loader/dist/runtime/sourceMaps.js":
/*!*********************************************************!*\
  !*** ../../../../css-loader/dist/runtime/sourceMaps.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/driverapp/Pages/Application/About.page":
/*!******************************************************************!*\
  !*** ./build.definitions/driverapp/Pages/Application/About.page ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"_Name":"KeyValue0","KeyName":"User ID","Value":"#Application/#AppData/UserId","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"#Application/#AppData/DeviceId","_Name":"KeyValue1","KeyName":"Device ID","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"/driverapp/Globals/Application/ApplicationName.global","_Name":"KeyValue2","KeyName":"Application","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"/driverapp/Globals/Application/AppDefinition_Version.global","_Name":"KeyValue3","KeyName":"Application Metadata Version","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"KeyAndValues":[{"Value":"/driverapp/Rules/Application/GetClientVersion.js","_Name":"KeyValue4","KeyName":"Client Version","Visible":"$(PLT,true,true,false)","_Type":"KeyValue.Type.Item"},{"Value":"/driverapp/Rules/Application/GetClientSupportVersions.js","_Name":"KeyValue5","KeyName":"Client Support Versions","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue1","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"About","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/driverapp/Actions/CloseModalPage_Complete.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"About","PrefersLargeCaption":true,"_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/driverapp/Pages/Application/Support.page":
/*!********************************************************************!*\
  !*** ./build.definitions/driverapp/Pages/Application/Support.page ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ContactCell","_Name":"SectionContactCellTable1","EmptySection":{"FooterVisible":false},"ContactCells":[{"ContactCell":{"_Name":"ContactCellItem0","Headline":"Contact Support","ActivityItems":[{"ActivityType":"Phone","ActivityValue":"/driverapp/Globals/Application/SupportPhone.global"},{"ActivityType":"Email","ActivityValue":"/driverapp/Globals/Application/SupportEmail.global"},{"ActivityType":"Message","ActivityValue":"/driverapp/Globals/Application/SupportPhone.global"}]}}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":false,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.SimplePropertyCollection","_Name":"SectionSimplePropertyCollection0","Visible":"$(PLT,true,true,false)","EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"_Name":"SectionSimplePropertyCell0","KeyName":"Activity Log","AccessoryType":"DisclosureIndicator","Visible":"$(PLT,true,true,false)","OnPress":"/driverapp/Actions/Application/NavToActivityLog.action","_Type":"SimplePropertyCollection.Type.Cell"}}],"Layout":{"NumberOfColumns":1,"MinimumInteritemSpacing":66}}]}],"_Type":"Page","_Name":"Settings","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/driverapp/Actions/CloseModalPage_Complete.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"Settings","PrefersLargeCaption":false,"_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/driverapp/Pages/Application/UserActivityLog.page":
/*!****************************************************************************!*\
  !*** ./build.definitions/driverapp/Pages/Application/UserActivityLog.page ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Controls":[{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"EnableLogSwitch","IsVisible":true,"Separator":true,"Caption":"Enable Logging","OnValueChange":"/driverapp/Rules/Logging/ToggleLogging.js","IsEditable":true},{"IsSearchEnabled":false,"_Type":"Control.Type.FormCell.ListPicker","_Name":"LogLevelListPicker","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Log Level","OnValueChange":"/driverapp/Rules/Logging/SetUserLogLevel.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":"/driverapp/Rules/Logging/LogLevels.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"TracingCategoriesListPicker","IsVisible":false,"Separator":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Tracing Categories","PickerPrompt":"Select Categories for Tracing","OnValueChange":"/driverapp/Rules/Logging/SetTraceCategories.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":"/driverapp/Rules/Logging/TraceCategories.js"},{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"odataTrace","IsVisible":false,"Separator":true,"Caption":"OData Tracing","OnValueChange":"/driverapp/Rules/Logging/SetTraceCategories.js","IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection0"},{"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"Send","IsVisible":true,"Separator":true,"Title":"Send Activity Log","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/driverapp/Actions/Logging/UploadLogProgress.action"}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection1"}]}],"_Type":"Page","_Name":"UserActivityLog","ActionBar":{"Caption":"Activity Log","PrefersLargeCaption":false,"_Type":"Control.Type.ActionBar"},"OnLoaded":"/driverapp/Rules/Logging/UserLogSetting.js"}

/***/ }),

/***/ "./build.definitions/driverapp/Pages/ArrivalEvent.page":
/*!*************************************************************!*\
  !*** ./build.definitions/driverapp/Pages/ArrivalEvent.page ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"_Type":"Control.Type.FormCell.InlineSignatureCapture","_Name":"SignatureArrv","IsVisible":true,"Separator":true,"Caption":"Signature","ShowTimestampInImage":true,"ShowXMark":true,"ShowUnderline":true,"WatermarkText":"Primesource","WatermarkTextMaxLines":5},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton0","IsVisible":true,"Separator":true,"Title":"Save","Alignment":"Center","ButtonType":"Primary","Semantic":"Tint","Image":"sap-icon://save","ImagePosition":"Leading","Enabled":true,"OnPress":"/driverapp/Rules/action/ReportArrivalSign.js"}],"Layout":{"NumberOfColumns":1},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"ArrivalEvent","ActionBar":{"Items":[],"_Name":"ActionBar2","_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/driverapp/Pages/Attachment.page":
/*!***********************************************************!*\
  !*** ./build.definitions/driverapp/Pages/Attachment.page ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Controls":[{"_Type":"Control.Type.FormCell.ListPicker","_Name":"FormCellListPicker0","IsVisible":true,"Separator":true,"AllowMultipleSelection":true,"AllowEmptySelection":false,"Caption":"Attachment Type","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select one single item","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"Search":{"Placeholder":"Select one"},"PickerItems":["Default"]}],"Layout":{"NumberOfColumns":1}}],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"Attachment","ActionBar":{"Items":[],"_Name":"ActionBar1","_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/driverapp/Pages/DelayEvent.page":
/*!***********************************************************!*\
  !*** ./build.definitions/driverapp/Pages/DelayEvent.page ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"_Type":"Control.Type.FormCell.ListPicker","_Name":"Delay_Reason","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Select one reason","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select one single item","PlaceHolder":"None","IsSelectedSectionEnabled":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":["Flat tire"]},{"_Type":"Control.Type.FormCell.Button","_Name":"Save","IsVisible":true,"Separator":true,"Title":"Save","Alignment":"Center","ButtonType":"Primary","Semantic":"Tint","Image":"sap-icon://save","ImagePosition":"Leading","Enabled":true,"OnPress":"/driverapp/Rules/action/ReportDelay.js"}],"Layout":{"NumberOfColumns":1},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"DelayEvent","ActionBar":{"Items":[],"_Name":"ActionBar2","_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/driverapp/Pages/DeliverdItems.page":
/*!**************************************************************!*\
  !*** ./build.definitions/driverapp/Pages/DeliverdItems.page ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Header":{"Styles":{"Header":"DelvItemTitle","Caption":"DelvItemTitle"},"_Type":"SectionCommon.Type.Header","_Name":"DelvItems_header","AccessoryType":"None","UseTopPadding":true,"Caption":"Delivered Items"},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Grouping":{"GroupingProperties":[],"Header":{"Items":[]}},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/driverapp/Services/main.service","EntitySet":"ZTM_I_DDL_DA_DLVIT","QueryOptions":"$filter=tor_id eq '{tor_id}' and stop_id eq '{stop_id}' and base_btd_id eq '{{#Page:Event/#Control:Delivery/#SelectedValue}}'&$orderby=item_id"},"_Name":"DelvItems","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[],"_Type":"ObjectCell.Type.ContextMenu"},"Title":"{item_id}","Subhead":"{item_descr}","Footnote":"{gro_vol_val} {gro_vol_uni}","Description":"{gro_wei_val} {gro_wei_uni}","DisplayDescriptionInMobile":true,"StatusText":"{qua_pcs_val} {qua_pcs_uni}","PreserveIconStackSpacing":false,"AccessoryType":"None","Icons":["sap-icon://product"],"Tags":[{"Text":"Product","Style":"tagStyleblue"}],"AvatarStack":{"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"Styles":{"Title":"ObjectTableTitle"},"_Type":"ObjectTable.Type.ObjectCell","Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"DeliverdItems","ActionBar":{"Items":[],"_Name":"ActionBar8","_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/driverapp/Pages/Detail.page":
/*!*******************************************************!*\
  !*** ./build.definitions/driverapp/Pages/Detail.page ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"ObjectHeader":{"Subhead":"/driverapp/Rules/Formatters/ExecutionStatus.js","Footnote":"/driverapp/Rules/Formatters/Return.js","DetailImage":"sap-icon://shipping-status","DetailImageIsCircular":false,"BodyText":"/driverapp/Rules/Formatters/Pickup.js","HeadlineText":"{tor_id}","StatusPosition":"Stacked","StatusImagePosition":"Leading","SubstatusImagePosition":"Leading","Styles":{"HeadlineText":"MainFOTitle","Subhead":"/driverapp/Rules/Formatters/ExecutionStyle.js"}},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0","Visible":true},{"KeyAndValues":[{"Value":"/driverapp/Rules/Formatters/SourceLocation.js","_Type":"KeyValue.Type.Item","_Name":"SourceKeyValue","KeyName":"Source Location","Visible":true},{"Value":"/driverapp/Rules/Formatters/DestinationLocation.js","_Type":"KeyValue.Type.Item","_Name":"DestinationKeyValue","KeyName":"Destination Location","Visible":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"LocationKeyValue","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}},{"Header":{"Styles":{"Header":"StopTitle","Caption":"StopTitle"},"_Type":"SectionCommon.Type.Header","_Name":"StopsHeader","AccessoryType":"None","UseTopPadding":true,"Caption":"Stops"},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Grouping":{"GroupingProperties":[],"Header":{"Items":[]}},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/driverapp/Services/main.service","EntitySet":"ZTM_I_DDL_DA_STOP","QueryOptions":"$filter=tor_id eq '{tor_id}'&$orderby=pln_arr_tstmp"},"_Name":"StopsList","Visible":true,"EmptySection":{"Caption":"No data","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[],"_Type":"ObjectCell.Type.ContextMenu"},"Title":"{name}","Subhead":"{city}","Footnote":"/driverapp/Rules/Formatters/Arrival.js","Description":"{region}-{country}","StatusText":"/driverapp/Rules/Formatters/StopStatus.js","SubstatusText":"{locid}","PreserveIconStackSpacing":false,"AccessoryType":"None","Tags":[],"AvatarStack":{"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"OnPress":"/driverapp/Actions/Navigation/To_Stop.action","_Type":"ObjectTable.Type.ObjectCell","Selected":false},"HighlightSelectedItem":false},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Layout":{"LayoutType":"Vertical","HorizontalAlignment":"Leading"},"_Type":"Section.Type.ButtonTable","_Name":"UnexpectedEvents","Visible":true,"EmptySection":{"FooterVisible":false},"Buttons":[{"_Type":"ButtonTable.Type.Button","_Name":"SetDeparted","Title":"Departure","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://journey-depart","ImagePosition":"Leading","FullWidth":true,"Visible":true,"Enabled":true,"OnPress":"/driverapp/Rules/action/ReportDepartureSource.js"},{"_Type":"ButtonTable.Type.Button","_Name":"Delay","Title":"Delay","Alignment":"Center","ButtonType":"Text","Semantic":"Negative","Image":"sap-icon://lateness","ImagePosition":"Leading","FullWidth":true,"Visible":false,"Enabled":true,"OnPress":"/driverapp/Actions/Navigation/To_DelayEvent.action"}]},{"Header":{"_Type":"SectionCommon.Type.Header","_Name":"AttachmentsHeader","AccessoryType":"None","UseTopPadding":true,"Caption":"Attachments"},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Grouping":{"GroupingProperties":["folder"],"Header":{"Items":[]}},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/driverapp/Services/main.service","EntitySet":"ZTM_I_DDL_DA_ATTC","QueryOptions":"$filter=tor_id eq '{tor_id}'"},"_Name":"AttachmentsList","Visible":false,"EmptySection":{"Caption":"No data","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[],"_Type":"ObjectCell.Type.ContextMenu"},"Title":"{name}","Subhead":"{folder}","PreserveIconStackSpacing":false,"AccessoryType":"None","Tags":[],"AvatarStack":{"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"_Type":"ObjectTable.Type.ObjectCell","Selected":false},"HighlightSelectedItem":false}]}],"_Type":"Page","_Name":"Detail","ActionBar":{"Items":[{"_Type":"Control.Type.ActionBarItem","_Name":"Synn_Detail","Caption":"Sync","Icon":"sap-icon://synchronize","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/driverapp/Rules/SyncGlobal.js"}],"_Name":"ActionBar5","_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/driverapp/Pages/ErrorArchive/ErrorArchive_Detail.page":
/*!*********************************************************************************!*\
  !*** ./build.definitions/driverapp/Pages/ErrorArchive/ErrorArchive_Detail.page ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"KeyAndValues":[{"Value":"{Message}","_Name":"KeyValue0","KeyName":"Error","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"{RequestBody}","_Name":"KeyValue1","KeyName":"Request Body","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"{RequestURL}","_Name":"KeyValue2","KeyName":"Request URL","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"{HTTPStatusCode}","_Name":"KeyValue3","KeyName":"HTTP Status Code","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"{RequestMethod}","_Name":"KeyValue4","KeyName":"Request Method","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"ErrorArchive_Detail","ActionBar":{"Caption":"Details","PrefersLargeCaption":true,"_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/driverapp/Pages/ErrorArchive/ErrorArchive_List.page":
/*!*******************************************************************************!*\
  !*** ./build.definitions/driverapp/Pages/ErrorArchive/ErrorArchive_List.page ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ObjectTable","Header":{"_Name":"SectionHeader_action","AccessoryType":"None","UseTopPadding":true,"Caption":"action","_Type":"SectionCommon.Type.Header"},"Target":{"Service":"/driverapp/Services/action.service","EntitySet":"ErrorArchive"},"_Name":"SectionObjectTable_action","Visible":true,"EmptySection":{"FooterVisible":false,"Caption":"No record found!"},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"_Type":"ObjectCell.Type.ContextMenu"},"Title":"{HTTPStatusCode}","Subhead":"{RequestURL}","Footnote":"{Message}","StatusText":"{RequestMethod}","AvatarStack":{"ImageIsCircular":false},"PreserveIconStackSpacing":false,"AccessoryType":"None","OnPress":"/driverapp/Actions/ErrorArchive/NavToErrorArchive_Detail.action","Selected":false,"_Type":"ObjectTable.Type.ObjectCell"},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}},{"_Type":"Section.Type.ObjectTable","Header":{"_Name":"SectionHeader_main","AccessoryType":"None","UseTopPadding":true,"Caption":"main","_Type":"SectionCommon.Type.Header"},"Target":{"Service":"/driverapp/Services/main.service","EntitySet":"ErrorArchive"},"_Name":"SectionObjectTable_main","Visible":true,"EmptySection":{"FooterVisible":false,"Caption":"No record found!"},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"_Type":"ObjectCell.Type.ContextMenu"},"Title":"{HTTPStatusCode}","Subhead":"{RequestURL}","Footnote":"{Message}","StatusText":"{RequestMethod}","AvatarStack":{"ImageIsCircular":false},"PreserveIconStackSpacing":false,"AccessoryType":"None","OnPress":"/driverapp/Actions/ErrorArchive/NavToErrorArchive_Detail.action","Selected":false,"_Type":"ObjectTable.Type.ObjectCell"},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"ErrorArchive_List","ActionBar":{"Caption":"Error List","PrefersLargeCaption":true,"_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/driverapp/Pages/Main.page":
/*!*****************************************************!*\
  !*** ./build.definitions/driverapp/Pages/Main.page ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Grouping":{"GroupingProperties":[],"Header":{"Items":[]}},"Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionCommonTypeHeader0","AccessoryType":"None","UseTopPadding":false,"Caption":"#Application/#AppData/UserId"},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/driverapp/Services/main.service","EntitySet":"ZTM_C_DDL_DA_ROOT","QueryOptions":"$orderby=tor_id desc"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[],"_Type":"ObjectCell.Type.ContextMenu"},"Title":"{tor_id}","Subhead":"To: {des_city}","Footnote":"/driverapp/Rules/Formatters/PickupDate.js","Description":"Util: {max_util}%","DisplayDescriptionInMobile":true,"StatusText":"/driverapp/Rules/Formatters/ExecutionStatus.js","SubstatusText":"/driverapp/Rules/Formatters/PickupTime.js","PreserveIconStackSpacing":false,"AccessoryType":"None","Icons":["sap-icon://shipping-status"],"Tags":[],"AvatarStack":{"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"OnPress":"/driverapp/Actions/Navigation/To_Detail.action","Styles":{"Title":"MainFOTitle","StatusText":"/driverapp/Rules/Formatters/ExecutionStatus.js","SubstatusText":"/driverapp/Rules/Formatters/Pickup.js","DetailImage":"Warning"},"_Type":"ObjectTable.Type.ObjectCell","Selected":false},"Search":{"Enabled":true},"DataPaging":{"ShowLoadingIndicator":true,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"Main","ActionBar":{"Items":[{"_Type":"Control.Type.ActionBarItem","_Name":"Sync","Caption":"Sync","Icon":"sap-icon://synchronize","Position":"Right","IsIconCircular":false,"OnPress":"/driverapp/Rules/SyncGlobal.js"},{"_Type":"Control.Type.ActionBarItem","_Name":"Logout","Caption":"Logout","Icon":"sap-icon://log","Position":"Right","IsIconCircular":false,"OnPress":"/driverapp/Actions/Application/Logout.action"},{"_Type":"Control.Type.ActionBarItem","_Name":"Reset","Caption":"Reset","Icon":"sap-icon://reset","Position":"Right","IsIconCircular":false,"OnPress":"/driverapp/Actions/action/Service/Reset.action"},{"_Type":"Control.Type.ActionBarItem","_Name":"Activity_Log","Caption":"Activity Log","Icon":"sap-icon://it-host","Position":"Right","IsIconCircular":false,"OnPress":"/driverapp/Actions/Navigation/ToActivityLog.action"}],"_Name":"ActionBar3","_Type":"Control.Type.ActionBar","Caption":"Shipments","PrefersLargeCaption":true}}

/***/ }),

/***/ "./build.definitions/driverapp/Pages/PODEvent.page":
/*!*********************************************************!*\
  !*** ./build.definitions/driverapp/Pages/PODEvent.page ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"_Type":"Control.Type.FormCell.ListPicker","_Name":"Delivery","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Select Delivery","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select one Delivery","PlaceHolder":"None","HelperText":"list of Deliveries for the Stop","IsSelectedSectionEnabled":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":{"Target":{"Service":"/driverapp/Services/main.service","EntitySet":"ZTM_I_DDL_DA_DLVIT","QueryOptions":"$apply=filter(tor_id eq '{tor_id}' and stop_id eq '{stop_id}')/groupby((base_btd_id))&$orderby=base_btd_id"},"DisplayValue":"{base_btd_id}","ReturnValue":"{base_btd_id}"}},{"_Type":"Control.Type.FormCell.Button","_Name":"DelvItems","IsVisible":true,"Separator":true,"Title":"Delivered Items","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://checklist","ImagePosition":"Leading","Enabled":true,"OnPress":"/driverapp/Rules/action/OpenDelvItems.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"EventReason","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Event reason","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select one single item","OnValueChange":"/driverapp/Rules/action/DelvRemarksVisibility.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":["Delivered- No Exceptions","Delivered- With Exceptions","Customer Closed","Customer Refused","Carrier Failure","Over","Short","Damaged"]},{"_Type":"Control.Type.FormCell.Note","_Name":"Remarks","IsVisible":false,"Separator":true,"PlaceHolder":"Remarks","HelperText":"Enter the remarks for Delivery","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.InlineSignatureCapture","_Name":"SignatureSrc","IsVisible":true,"Separator":true,"Caption":"Recipient Signature","ShowTimestampInImage":true,"ShowXMark":true,"ShowUnderline":true,"WatermarkText":"PrimeSource","WatermarkTextMaxLines":5},{"_Type":"Control.Type.FormCell.Note","_Name":"Cust_name","IsVisible":true,"Separator":true,"PlaceHolder":"Recipient","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.Note","_Name":"KeyRec","IsVisible":true,"Separator":true,"PlaceHolder":"KeyRec Number","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.Button","_Name":"SavePOD","IsVisible":true,"Separator":true,"Title":"Save","Alignment":"Center","ButtonType":"Primary","Semantic":"Tint","Image":"sap-icon://save","ImagePosition":"Leading","Enabled":true,"OnPress":"/driverapp/Rules/action/ReportPOD.js"}],"Layout":{"NumberOfColumns":1},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"Event","ActionBar":{"Items":[],"_Name":"ActionBar15","_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/driverapp/Pages/Stop.page":
/*!*****************************************************!*\
  !*** ./build.definitions/driverapp/Pages/Stop.page ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"ObjectHeader":{"Subhead":"{city}","Footnote":"/driverapp/Rules/Formatters/Departure.js","Description":"{region}-{country}","StatusText":"/driverapp/Rules/Formatters/StopStatus.js","DetailImageIsCircular":false,"BodyText":"/driverapp/Rules/Formatters/Arrival.js","HeadlineText":"{name}","StatusPosition":"Stacked","StatusImagePosition":"Leading","SubstatusImagePosition":"Leading","Styles":{"HeadlineText":"MainFOTitle"}},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0","Visible":true},{"KeyAndValues":[{"Value":"/driverapp/Rules/Formatters/StopAddress.js","_Type":"KeyValue.Type.Item","_Name":"KeyValueAddr","KeyName":"Address","Visible":true}],"MaxItemCount":1,"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Layout":{"LayoutType":"Vertical","HorizontalAlignment":"Leading"},"_Type":"Section.Type.ButtonTable","_Name":"ActionButtons","Visible":true,"EmptySection":{"FooterVisible":false},"Buttons":[{"_Type":"ButtonTable.Type.Button","_Name":"ArrivalBtn","Title":"Arrival","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://journey-arrive","ImagePosition":"Leading","FullWidth":true,"Visible":"/driverapp/Rules/action/StopArrvButtonVisibility.js","Enabled":true,"OnPress":"/driverapp/Actions/Navigation/To_Arrival_Sign.action"},{"_Type":"ButtonTable.Type.Button","_Name":"DepartureBtn","Title":"Departure","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://journey-depart","ImagePosition":"Leading","FullWidth":true,"Visible":"/driverapp/Rules/action/StopDepButtonVisibility.js","Enabled":true,"OnPress":"/driverapp/Rules/action/ReportDeparture.js"},{"_Type":"ButtonTable.Type.Button","_Name":"PODBtn","Title":"Proof of Delivery","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://customer-order-entry","ImagePosition":"Leading","FullWidth":true,"Visible":true,"Enabled":true,"OnPress":"/driverapp/Actions/Navigation/To_Event.action"}]},{"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"Delay","IsVisible":true,"Separator":true,"Title":"Delay","Alignment":"Center","ButtonType":"Text","Semantic":"Negative","Image":"sap-icon://lateness","ImagePosition":"Leading","Enabled":true,"OnPress":"/driverapp/Actions/Navigation/To_DelayEvent.action"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"AttachmentType","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Attachment Type","Label":"Attachment Type","HelperText":"Select an attachment type and upload","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":[{"DisplayValue":"Default","ReturnValue":"ATCMT"},{"DisplayValue":"Key Rec","ReturnValue":"ZKEYR"},{"DisplayValue":"Freight Picture","ReturnValue":"ZFPIC"},{"DisplayValue":"Signature","ReturnValue":"ZSIG"},{"DisplayValue":"Others","ReturnValue":"ZOTHE"}]},{"_Type":"Control.Type.FormCell.Attachment","_Name":"AttachmentFormCell","IsVisible":true,"Separator":true,"OnValueChange":"/driverapp/Rules/action/OnDocumentUpload.js","AttachmentActionType":["AddPhoto","TakePhoto","SelectFile"]}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"},{"Header":{"Styles":{"Header":"StopTitle","Caption":"StopTitle"},"_Type":"SectionCommon.Type.Header","_Name":"StopItems","AccessoryType":"None","UseTopPadding":true,"Caption":"Items"},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Grouping":{"GroupingProperties":[],"Header":{"Items":[]}},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/driverapp/Services/main.service","EntitySet":"ZTM_I_DDL_DA_STIT","QueryOptions":"$filter=tor_id eq '{tor_id}' and stop_id eq '{stop_id}'&$orderby=item_id"},"_Name":"StopItemsSection","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[],"_Type":"ObjectCell.Type.ContextMenu"},"Title":"{product_id}","Subhead":"{item_descr}","Footnote":"{gro_vol_val} {gro_vol_uni}","Description":"{gro_wei_val} {gro_wei_uni}","StatusText":"{qua_pcs_val} {qua_pcs_uni}","PreserveIconStackSpacing":false,"AccessoryType":"None","Tags":[],"AvatarStack":{"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"_Type":"ObjectTable.Type.ObjectCell","Selected":false},"HighlightSelectedItem":false}]}],"_Type":"Page","_Name":"Stop","ActionBar":{"Items":[{"_Type":"Control.Type.ActionBarItem","_Name":"ShowMap","Caption":"Show map","Icon":"sap-icon://map-2","Position":"Right","IsIconCircular":true,"IconText":"Showmap","Visible":true,"OnPress":"/driverapp/Rules/action/OpenMaps.js"}],"_Name":"ActionBar3","_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"_Name":"driverapp","Version":"/driverapp/Globals/Application/AppDefinition_Version.global","MainPage":"/driverapp/Pages/Main.page","OnLaunch":"/driverapp/Rules/Service/Initialize.js","OnWillUpdate":"/driverapp/Rules/Application/OnWillUpdate.js","OnDidUpdate":"/driverapp/Rules/Service/Initialize.js","Styles":"/driverapp/Styles/Styles.css","Localization":"/driverapp/i18n/i18n.properties","_SchemaVersion":"25.6","StyleSheets":{"Styles":{"css":"/driverapp/Styles/Styles.light.css","ios":"/driverapp/Styles/Styles.light.nss","android":"/driverapp/Styles/Styles.light.json"}},"SDKStyles":{"ios":"/driverapp/Styles/Styles.light.nss","android":"/driverapp/Styles/Styles.light.json"}}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/Application/AppUpdate.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/Application/AppUpdate.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/driverapp/Rules/Application/AppUpdateFailure.js","OnSuccess":"/driverapp/Rules/Application/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/Application/AppUpdateFailureMessage.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/Application/AppUpdateFailureMessage.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/Application/AppUpdateProgressBanner.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/Application/AppUpdateProgressBanner.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/driverapp/Actions/Application/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/Application/AppUpdateSuccessMessage.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/Application/AppUpdateSuccessMessage.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/Application/Logout.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/Application/Logout.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":true}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/Application/NavToAbout.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/Application/NavToAbout.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/driverapp/Pages/Application/About.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/Application/NavToActivityLog.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/Application/NavToActivityLog.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/driverapp/Pages/Application/UserActivityLog.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/Application/NavToSupport.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/Application/NavToSupport.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"NavigationType":"Cross","PageToOpen":"/driverapp/Pages/Application/Support.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/Application/OnWillUpdate.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/Application/OnWillUpdate.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/Application/Reset.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/Application/Reset.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":false}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/Application/ResetMessage.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/Application/ResetMessage.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","Title":"Reset","OKCaption":"Yes","OnOK":"/driverapp/Rules/Application/ResetAppSettingsAndLogout.js","CancelCaption":"No"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/Application/UserMenuPopover.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/Application/UserMenuPopover.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Enabled":true,"Icon":"sap-icon://synchronize","OnPress":"/driverapp/Actions/main/Service/SyncStartedMessage.action","Title":"Sync Changes","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://headset","OnPress":"/driverapp/Actions/Application/NavToSupport.action","Title":"Support","Visible":true},{"Enabled":true,"Icon":"sap-icon://refresh","OnPress":"/driverapp/Actions/Application/AppUpdateProgressBanner.action","Title":"Check for Updates","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://hint","OnPress":"/driverapp/Actions/Application/NavToAbout.action","Title":"About","Visible":true},{"Enabled":true,"Icon":"sap-icon://reset","OnPress":"/driverapp/Actions/Application/ResetMessage.action","Title":"Reset","Visible":true},{"Enabled":true,"Icon":"sap-icon://log","OnPress":"/driverapp/Actions/Application/Logout.action","Title":"Logout","Visible":"/driverapp/Rules/Application/ClientIsMultiUserMode.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/CloseModalPage_Cancel.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/CloseModalPage_Cancel.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/CloseModalPage_Complete.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/CloseModalPage_Complete.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/ClosePage.action":
/*!**************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/ClosePage.action ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/Console.action":
/*!************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/Console.action ***!
  \************************************************************/
/***/ ((module) => {

module.exports = {"Message":"{Message}","OKCaption":"Ok","Title":"Message","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","Message":"Upload failed!","Duration":0,"Animated":false,"OnActionLabelPress":"/driverapp/Actions/ErrorArchive/NavToErrorArchive_List.action","ActionLabel":"View Errors"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/ErrorArchive/NavToErrorArchive_Detail.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/ErrorArchive/NavToErrorArchive_Detail.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/driverapp/Pages/ErrorArchive/ErrorArchive_Detail.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/ErrorArchive/NavToErrorArchive_List.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/ErrorArchive/NavToErrorArchive_List.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/driverapp/Pages/ErrorArchive/ErrorArchive_List.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/GenericBannerMessage.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/GenericBannerMessage.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","ActionResult":{"_Name":"GenericBannerMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/GenericMessageBox.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/GenericMessageBox.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"GenericMessageBox"},"Message":"Message","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/GenericNavigation.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/GenericNavigation.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"GenericNavigation"},"PageToOpen":"/driverapp/Pages/Main.page"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/GenericToastMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/GenericToastMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"GenericToastMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/Logging/LogUploadFailure.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/Logging/LogUploadFailure.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Uploading log file failed with error: {#ActionResults:UploadLog/error}","OKCaption":"OK","Title":"Log Upload Failed","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/Logging/LogUploadSuccessful.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/Logging/LogUploadSuccessful.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":3,"IsIconHidden":false,"MaxNumberOfLines":1,"Message":"Log File Uploaded","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/Logging/UploadLog.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/Logging/UploadLog.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"ActionResult":{"_Name":"UploadLog"},"ActivityIndicatorText":"Uploading...","OnFailure":"/driverapp/Actions/Logging/LogUploadFailure.action","OnSuccess":"/driverapp/Actions/Logging/LogUploadSuccessful.action","ShowActivityIndicator":false,"_Type":"Action.Type.Logger.Upload"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/Logging/UploadLogProgress.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/Logging/UploadLogProgress.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionMessage":"Logs Uploaded","CompletionTimeout":2,"Message":"Uploading Log Files...","OnSuccess":"/driverapp/Actions/Logging/UploadLog.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/Navigation/ToActivityLog.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/Navigation/ToActivityLog.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"ToActivityLog"},"PageToOpen":"/driverapp/Pages/Application/UserActivityLog.page"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/Navigation/ToDelvItems.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/Navigation/ToDelvItems.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"ToDelvItems"},"PageToOpen":"/driverapp/Pages/DeliverdItems.page"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/Navigation/To_Arrival_Sign.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/Navigation/To_Arrival_Sign.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"To_Arrival_Sign"},"PageToOpen":"/driverapp/Pages/ArrivalEvent.page"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/Navigation/To_DelayEvent.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/Navigation/To_DelayEvent.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"To_DelayEvent"},"PageToOpen":"/driverapp/Pages/DelayEvent.page"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/Navigation/To_Detail.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/Navigation/To_Detail.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"To_Detail"},"PageToOpen":"/driverapp/Pages/Detail.page"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/Navigation/To_Event.action":
/*!************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/Navigation/To_Event.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"To_Event"},"PageToOpen":"/driverapp/Pages/PODEvent.page"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/Navigation/To_Stop.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/Navigation/To_Stop.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"To_Stop"},"PageToOpen":"/driverapp/Pages/Stop.page"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/action/Service/CloseOffline.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/action/Service/CloseOffline.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OfflineOData.Close","Service":"/driverapp/Services/action.service","Force":true,"ActionResult":{"_Name":"close"},"OnSuccess":"/driverapp/Actions/action/Service/CloseOfflineSuccessMessage.action","OnFailure":"/driverapp/Actions/action/Service/CloseOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/action/Service/CloseOfflineFailureMessage.action":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/action/Service/CloseOfflineFailureMessage.action ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failure closing data service - {#ActionResults:close/error}","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/action/Service/CloseOfflineSuccessMessage.action":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/action/Service/CloseOfflineSuccessMessage.action ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Data service closed successfully","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/action/Service/DownloadOffline.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/action/Service/DownloadOffline.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/driverapp/Services/action.service","DefiningRequests":[{"Name":"AttachmentSet","Query":"AttachmentSet"},{"Name":"EventSet","Query":"EventSet"}],"_Type":"Action.Type.OfflineOData.Download","ActionResult":{"_Name":"sync"},"OnFailure":"/driverapp/Actions/action/Service/SyncFailureMessage.action","OnSuccess":"/driverapp/Rules/action/ErrorArchive_CheckForSyncError.js"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/action/Service/DownloadStartedMessage.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/action/Service/DownloadStartedMessage.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Download in progress...","CompletionMessage":"Download Successful","CompletionTimeout":7,"OnSuccess":"/driverapp/Actions/action/Service/DownloadOffline.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/action/Service/InitializeOffline.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/action/Service/InitializeOffline.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/driverapp/Services/action.service","DefiningRequests":[{"Name":"AttachmentSet","Query":"AttachmentSet"},{"Name":"EventSet","Query":"EventSet"}],"_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"ActivityIndicatorText":"Downloading actions...","ActionResult":{"_Name":"init"},"OnFailure":"/driverapp/Actions/action/Service/InitializeOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/action/Service/InitializeOfflineFailureMessage.action":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/action/Service/InitializeOfflineFailureMessage.action ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/action/Service/ReportArrivalEventConfirmation.action":
/*!**************************************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/action/Service/ReportArrivalEventConfirmation.action ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"ReportEventConfirmation"},"Title":"Reporting Event","Message":"{message}","OKCaption":"Confirm","CancelCaption":"Cancel","OnOK":"/driverapp/Rules/action/ReportArrival.js"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/action/Service/ReportDepartureEventConfirmation.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/action/Service/ReportDepartureEventConfirmation.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"ReportEventConfirmation"},"Title":"Reporting Event","Message":"{message}","OKCaption":"Confirm","CancelCaption":"Cancel","OnOK":"/driverapp/Rules/action/ReportDeparture.js"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/action/Service/ReportEvent.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/action/Service/ReportEvent.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"ReportEvent"},"ShowActivityIndicator":true,"ActivityIndicatorText":"Reporting event ....","Target":{"Service":"/driverapp/Services/action.service","EntitySet":"EventSet"},"Properties":{"tor_id":"{tor_id}","event_time":"{event_time}","event_code":"{event_code}","ext_loc_id":"{ext_loc_id}","event_reason":"{event_reason}","recipient":"{recipient}","Keyrec":"{Keyrec}","DelvRemarks":"{DelvRemarks}"},"RequestOptions":{"RemoveCreatedEntityAfterUpload":true}}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/action/Service/Reset.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/action/Service/Reset.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OfflineOData.Clear","ActionResult":{"_Name":"Reset"},"Service":"/driverapp/Services/action.service","Force":true}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/action/Service/SyncFailureMessage.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/action/Service/SyncFailureMessage.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Sync offline data service failure - {#ActionResults:sync/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/action/Service/SyncStartedMessage.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/action/Service/SyncStartedMessage.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Upload in progress...","CompletionMessage":"Sync completed","CompletionTimeout":7,"OnSuccess":"/driverapp/Actions/action/Service/UploadOffline.action","OnFailure":"/driverapp/Actions/action/Service/SyncFailureMessage.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/action/Service/UploadAttachment.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/action/Service/UploadAttachment.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateMedia","ActionResult":{"_Name":"UploadAttachment"},"OnFailure":"/driverapp/Rules/action/CreateFailure.js","OnSuccess":"/driverapp/Rules/action/CreateSuccess.js","OnInvalid":"/driverapp/Rules/action/CreateFailure.js","Target":{"Service":"/driverapp/Services/action.service","EntitySet":"AttachmentSet","ReadLink":"{@odata.readLink}"},"Media":"#Control:AttachmentFormCell","Properties":{"tor_id":"{tor_id}","doc_key":"","name":"{name}","alternative_name":"","description":"","filesize_content":"","folder":"ROOT","attachment_type":"ATCMT"},"RequestOptions":{"RemoveCreatedEntityAfterUpload":true}}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/action/Service/UploadOffline.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/action/Service/UploadOffline.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/driverapp/Services/action.service","_Type":"Action.Type.OfflineOData.Upload","ActionResult":{"_Name":"sync"},"OnSuccess":"/driverapp/Actions/action/Service/DownloadStartedMessage.action","OnFailure":"/driverapp/Actions/action/Service/SyncFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/main/Service/CloseOffline.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/main/Service/CloseOffline.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OfflineOData.Close","Service":"/driverapp/Services/main.service","Force":true,"ActionResult":{"_Name":"close"},"OnSuccess":"/driverapp/Actions/main/Service/CloseOfflineSuccessMessage.action","OnFailure":"/driverapp/Actions/main/Service/CloseOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/main/Service/CloseOfflineFailureMessage.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/main/Service/CloseOfflineFailureMessage.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failure closing data service - {#ActionResults:close/error}","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/main/Service/CloseOfflineSuccessMessage.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/main/Service/CloseOfflineSuccessMessage.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Data service closed successfully","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/main/Service/DownloadOffline.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/main/Service/DownloadOffline.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/driverapp/Services/main.service","DefiningRequests":[{"Name":"ZTM_C_DDL_DA_ROOT","Query":"ZTM_C_DDL_DA_ROOT"},{"Name":"ZTM_I_DDL_DA_ATTC","Query":"ZTM_I_DDL_DA_ATTC"},{"Name":"ZTM_I_DDL_DA_EVTL","Query":"ZTM_I_DDL_DA_EVTL"},{"Name":"ZTM_I_DDL_DA_STIT","Query":"ZTM_I_DDL_DA_STIT"},{"Name":"ZTM_I_DDL_DA_STOP","Query":"ZTM_I_DDL_DA_STOP"}],"_Type":"Action.Type.OfflineOData.Download","ActionResult":{"_Name":"sync"},"OnFailure":"/driverapp/Actions/main/Service/SyncFailureMessage.action","OnSuccess":"/driverapp/Rules/main/ErrorArchive_CheckForSyncError.js"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/main/Service/DownloadStartedMessage.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/main/Service/DownloadStartedMessage.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Download in progress...","CompletionMessage":"Download Successful","CompletionTimeout":7,"OnSuccess":"/driverapp/Actions/main/Service/DownloadOffline.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/main/Service/InitializeOffline.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/main/Service/InitializeOffline.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/driverapp/Services/main.service","DefiningRequests":[{"Name":"ZTM_C_DDL_DA_ROOT","Query":"ZTM_C_DDL_DA_ROOT"},{"Name":"ZTM_I_DDL_DA_ATTC","Query":"ZTM_I_DDL_DA_ATTC"},{"Name":"ZTM_I_DDL_DA_EVTL","Query":"ZTM_I_DDL_DA_EVTL"},{"Name":"ZTM_I_DDL_DA_STIT","Query":"ZTM_I_DDL_DA_STIT"},{"Name":"ZTM_I_DDL_DA_STOP","Query":"ZTM_I_DDL_DA_STOP"},{"Name":"ZTM_I_DDL_DA_DLVIT","Query":"ZTM_I_DDL_DA_DLVIT"},{"Name":"ZTM_I_DDL_DA_FUIT","Query":"ZTM_I_DDL_DA_FUIT"}],"_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"ActivityIndicatorText":"Downloading Shipments...","ActionResult":{"_Name":"init"},"OnFailure":"/driverapp/Actions/main/Service/InitializeOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/main/Service/InitializeOfflineFailureMessage.action":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/main/Service/InitializeOfflineFailureMessage.action ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/main/Service/SyncFailureMessage.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/main/Service/SyncFailureMessage.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Sync offline data service failure - {#ActionResults:sync/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/main/Service/SyncStartedMessage.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/main/Service/SyncStartedMessage.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Upload in progress...","CompletionMessage":"Sync completed","CompletionTimeout":7,"OnSuccess":"/driverapp/Actions/main/Service/UploadOffline.action","OnFailure":"/driverapp/Actions/main/Service/SyncFailureMessage.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/driverapp/Actions/main/Service/UploadOffline.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/driverapp/Actions/main/Service/UploadOffline.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/driverapp/Services/main.service","_Type":"Action.Type.OfflineOData.Upload","ActionResult":{"_Name":"sync"},"OnSuccess":"/driverapp/Actions/main/Service/DownloadStartedMessage.action","OnFailure":"/driverapp/Actions/main/Service/SyncFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/driverapp/Globals/Application/AppDefinition_Version.global":
/*!**************************************************************************************!*\
  !*** ./build.definitions/driverapp/Globals/Application/AppDefinition_Version.global ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/driverapp/Globals/Application/ApplicationName.global":
/*!********************************************************************************!*\
  !*** ./build.definitions/driverapp/Globals/Application/ApplicationName.global ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"MDK App","_Type":"String"}

/***/ }),

/***/ "./build.definitions/driverapp/Globals/Application/SupportEmail.global":
/*!*****************************************************************************!*\
  !*** ./build.definitions/driverapp/Globals/Application/SupportEmail.global ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"support@mycompany.com","_Type":"String"}

/***/ }),

/***/ "./build.definitions/driverapp/Globals/Application/SupportPhone.global":
/*!*****************************************************************************!*\
  !*** ./build.definitions/driverapp/Globals/Application/SupportPhone.global ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1-800-677-7271","_Type":"String"}

/***/ }),

/***/ "./build.definitions/driverapp/Services/action.service":
/*!*************************************************************!*\
  !*** ./build.definitions/driverapp/Services/action.service ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"action","OfflineEnabled":true,"LanguageURLParam":"","OnlineOptions":{},"OfflineOptions":{"StoreParameters":{}},"PathSuffix":"","SourceType":"Mobile","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/driverapp/Services/main.service":
/*!***********************************************************!*\
  !*** ./build.definitions/driverapp/Services/main.service ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"main","OfflineEnabled":true,"SourceType":"Mobile"}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "webpack/container/entry/bundle.js":
/*!***********************!*\
  !*** container entry ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var moduleMap = {
	".": () => {
		return Promise.resolve().then(() => (() => ((__webpack_require__(/*! ./build.definitions/application-index.js */ "./build.definitions/application-index.js")))));
	}
};
var get = (module, getScope) => {
	__webpack_require__.R = getScope;
	getScope = (
		__webpack_require__.o(moduleMap, module)
			? moduleMap[module]()
			: Promise.resolve().then(() => {
				throw new Error('Module "' + module + '" does not exist in container.');
			})
	);
	__webpack_require__.R = undefined;
	return getScope;
};
var init = (shareScope, initScope) => {
	if (!__webpack_require__.S) return;
	var name = "default"
	var oldScope = __webpack_require__.S[name];
	if(oldScope && oldScope !== shareScope) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
	__webpack_require__.S[name] = shareScope;
	return __webpack_require__.I(name, initScope);
};

// This exports getters to disallow modifications
__webpack_require__.d(exports, {
	get: () => (get),
	init: () => (init)
});

/***/ }),

/***/ "./build.definitions/driverapp/Styles/Styles.light.json":
/*!**************************************************************!*\
  !*** ./build.definitions/driverapp/Styles/Styles.light.json ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"tagStyleBlue":{"font-color":"#edf6fa","background-color":"#0040b0"},"Pagebkg":{"font-color":"#EBF8FF"},"ActionBar":{"font-color":"white","background-color":"#06304979"},"ObjectTableTitle":{"font-color":"#0070F2","background-color":"#06304979"},"DelvItemTitle":{"font-color":"white","background-color":"#0497aabb","font-size":"medium"},"MainFOTitle":{"font-color":"#1b90ff","background-color":"#edf6fa"},"StopTitle":{"font-color":"white","background-color":"#1a60b1","font-size":"medium"}}');

/***/ }),

/***/ "./build.definitions/driverapp/jsconfig.json":
/*!***************************************************!*\
  !*** ./build.definitions/driverapp/jsconfig.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"compilerOptions":{"module":"esnext","target":"es2019","moduleResolution":"node","lib":["esnext","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = (msg) => {
/******/ 				if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 			};
/******/ 			var uniqueName = undefined;
/******/ 			var register = (name, version, factory, eager) => {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = (id) => {
/******/ 				var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("webpack/container/entry/bundle.js");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map