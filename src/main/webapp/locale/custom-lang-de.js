/*
 * Copyright (c) 2015  www.see-r.com
 * All rights reserved
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

_alert = {
    "selectRecord": "Bitte wählen Sie einen Datensatz",
    "createAppDB": "Sie müssen zuerst einen Antrag und eine Datenbank wahlen",
    "createApp": "Sie müssen zuerst einen Antrag wahlen.",
    "editNotPermitted": "Sie können nicht die Felder dieses Schemas bearbeiten",
    "loadNotPermittedStep1": "Diese Funktion ist nicht für diese Art von Schema erlaubt",
    "loadNotPermittedStep2": "Dieses Feature ist nicht zulässig, da es Felder im Schema",
    "loadNotPermittedStep3": "This feature is not allowed for this type of schema. Select schema of type XML or XMLEXI",
    "fillFields": "alle Felder ausfüllen",
    "errorSelectRecord": " WÄhlen Sie einen Eintrag des Fehlers",
    "nameFieldRequired": "Der Name ist erforderlich",
    "saveOrCancelChanges": "Sie müssen speichern oder änderungen zu verwerfen",
    "errorXsdExport": "Die XSD können nicht exportiert sein",
    "updateRecord": "Record erfolgreich geändert ist",
    "insertTrace": "Einfueren Sie einen DatenStroma zu validieren",
    "minlengthFieldRequired": "The min length field is required",    
    "maxlengthFieldRequired": "The max length field is required",
    "sizeFieldRequired":"The size field is required",
    "invalidMinLengthField":"Minimum field's value should be greater than zero",
    "invalidMinCompareValue":"Minimum field's value should be less than or equal to max value",
    "invalidMaxLengthField":"Maximum field's value should be greater than or equal to max value",
    "invalidMaxCompareValue":"Maximum field's value should be less than size field's value",
    "minInclusiveFieldRequired": "The min inclusive field is required",    
    "maxInclusiveFieldRequired": "The max inclusive field is required",
    "invalidMinInclusiveField":"Minimum inclusive field's value should be greater than zero",
    "invalidMinInclusiveCompareValue":"Minimum inclusive field's value should be less than max inclusive value",
    "invalidMaxInclusiveCompareValue":"Maximum inclusive field's value should be greater than the min inclusive value",
    "invalidMaxInclusiveSizeValue":"Maximum inclusive field's value should be less than the size field's value",
    "addRecord": "Record added successfully",
    "noStreamData": "Stream can not be saved: no stream data",
    "chooseTree": "Please choose a node of the upper tree",
    "fieldWithoutDbLink" : "Please choose a node that has a link with data base",
    "serverDown" : "Sorry, there are some errors on server side. Probably the server is down. <br/>Please try to reload this page a few moments later.",
    "schemaWithoutLinkedToDbFields" : "Current schema must have at least one field linked to database.",
	"sqlDeleted" : "Sql is deleted from database",
    "sqlSaved" : "Sql is saved to database",
    "selectDBRecord" : "Please select a record from list of database record"
};

_error = {
    "connectionError": "Fehler beim Verbinden zum Server",
    "invalidFileExtError": "Bitte wählen Sie XSD-Datei.",
    "invalidXSDFileError": ". Fehler beim Parsen von XSD-Datei Bitte wählen Sie gültige XSD-Datei.",
    "invalidCredentials": "Ungültiger Benutzername oder Kennwort",
    "invalidCaptcha": "Ungültige Captcha",
    "nameExistError":"Der Name existiert schon",
    "userNotEnabled":"Der Benutzer ist nicht erreichbar",
    "userNameRequired":"Der erforderte Benutzername ",
    "emailRequired":"Die erforderten E-mail",
    "noRecordFound":"Keine Datensaetze sind gefunden",
    "stringEmptyError":"Einfueren Sie bitte die Reihenfolge des Werts",
    "valueEmptyError":"Einfueren Sie bitte den Wert",
    "errorEmptyError":"Einfueren Sie bitte den Wert des Fehler",
    "dateEmptyError":"Einfueren Sie bitte die beduetsame Daten",
    "decimalValueError":"Einfueren Sie bitte der gultig Dezimalwert",
    "plannedNameError": "Bitte wählen geplante Name",
    "shootDateError": "Bitte wählen 'one shot' Datum",
    "shootTimeError": "Bitte geben Sie 'one shot' Zeit",
    "delimiterEmptyError": "Bitte geben Sie delimiter Wert",
    "schemaEmptyFieldError": "Dieses Schema nicht fields",
    "minuteSelectError":"Waehlen Sie Minute",
    "hourSelectError":"Waehlen Sie Stunde",
    "daySelectError":"Waehlen Sie Tag",
    "monthSelectError":"Waehlen Sie Monaten",
    "weekSelectError":"Waehlen Sie Woche",
    "dateSelectError":"Waehlen Sie das Datum",
    "timeError":"Waehlen Sie die Zeit",
    "databaseInputError":"Waehlen Sie die Eingabe des Dateibase",
    "databaseStoreError":"Waehlen Sie der Speicher des Dateibase",
    "invalidTimeFormatError":"Invalid Time Format. Please specify time in hh:mm format",
    "serviceError":"Service is disabled so, you can't download file",
    "everySecondError":"Every Second value must be greater than 0",
    "fileDownloadError":"File doesn't exist on server so, file can't be downloaded",
    "invalidImportFileExtError":"Please select .jv file",
    "descFieldRequired": "The min length of description field is required",
    "regExpFieldRequired": "The Regular Expression field is required",
    "recordEditError": "Selected record can't be edited",
    "recordDeleteError": "Selected record can't be deleted",
    "trimcharEmptyError":"Please enter trim character value",
    "streamValidationRequired":"Please select Custom Stream Validation",
    "streamGenerationRequired":"Please select Stream Generation",
    "applicationRequired":"Please select Application",
    "connectionRequired":"Please select Connections",
    "plannerRequired":"Please select Planner",
    "schemaActivateError":"The schema is not complete and not ready for validation",
    "passwordRequired":"Password required",
    "hostRequired":"Host required",
    "portRequired":"Port required",
    "protocolRequired":"Protocol required",
    "encodingRequired":"Encoding required",
    "smtpstimeoutRequired":"SMTPS Timeout required",
    "invalidLinkFieldError" : "Please select database field to link with schema field",
    "databaseConnectionError": "Database can't be connected so, fields can't be created"
};

_message = {
    "selectFileValidate": "wählen Sie eine Datei zu validieren",
    "select": "wählen Sie ....",
    "save": "Speichern",
    "error": "Fehler",
    "commitChanges": "Sie müssen speichern oder änderungen zu verwerfen",
    "cancel": "Abbrechen",
    "schemasList": "Schemas Liste",
    "add": "hinzufügen",
    "delete": "streichen",
    "edit": "Bearbeiten",
    "logout": "Abmelden",
    "help": "Hilfe",
    "ok": "Ok",
    "editFields": "Felder bearbeitet",
    "loadFields": "Legen Sie Felder",
    "duplicate": "Duplikat",
    "validateDatastream": "Datastream Validate",
    "validateDatastreamOfSchema": "Datastream von Schema zu validieren",
    "validateFile": "Validate File",
    "close": "Schließen",
    "scheme1": "Schema 1",
    "numeric":"Numerisch",
    "alphanumeric":"Alphanumerischen",
    "decimal": "Dezimal",
    "uploadXSD": "Laden Sie XSD",
    "uploadfile": "Datei hochladen",
    "downloadFile": "Datei herunterladen",
    "validate": "Bestätigen",
    "loadmsg": "Laden",
    "invalid": "Ungültig",
    "valid": "GÜltig",
    "validateSchema": "Validate-Schema",
    "addroot": "Fügen Sie Loesung",
    "addBranch": "Add Branche",
    "addLeaf": "Add Blatt",
    "addItem": "Artikel hinzufügen ist",
    "all": "Alles",
    "choice": "Wahl",
    "sequence":"Sequenz",
    "date": "Datum",
    "XSDdate": "XSD Datum",
    "notOptional": "Nicht optional",
    "optional": "Optional",
    "disabled":"Gesperrt" ,
    "enabled":"Qualifiziert",
    "left": "links",
    "right": "rechts",
    "integer": "Integer",
    "time": "Zeit",
    "dateAndTime": "Datum und Uhrzeit",
    "XSDhour": "XSD Zeit",
    "timestampUnix": "Zeitstamp unix",
    "XSDdateAndTime": "XSD Datum und Uhrzeit",
    "minLength": "Min LÄnge",
    "maxLength": "Max LÄnge",
    "sizeField": "Size field",
    "minInclusive": "Min inclusive",
    "maxInclusive": "Max inclusive",
    "type": "Typ",
    "decimalPlaces": "Nachkommastellen",
    "format": "Format",
    "upload": "Upload",
    "download": "Download",
    "loadTheFile": "Laden Sie die Datei ...",
    "validTheFile": "Validierung Sie die Datei ...",
    "alignment": "Ausrichtung",
    "fillCharacter": "Füllzeichen",
    "xsdUploadedSuccessfully": "XSD erfolgreich hochgeladen",
    "xsdNotUploaded": "XSD nicht hochgeladen!",
    "fileNotUploaded": "Die Datei wurde nicht hochgeladen",
    "fileUploaded": "erfolgreich hochgeladen File!",
    "result": "Ergebnis:",
    "datastreamReceived": "Datastream erhalten",
    "datastreamReceivedOfSchema": "Datastream des Schemas erhalten",

    "applicationHelpMessage": "Eine Anwendung ist ein Container von Data Streams<br/>Das Hauptmerkmal besteht in der Tatsache, dass die Anwendung Datenstrome müssen. entsprechen die entsprechende GÜltigkeitsdauer.<br/>In diesem Abschnitt können Sie hinzufügen, bearbeiten und löschen Anwendungen nach Ihren Berechtigungen erteilt werden.",
    "reportsHelpMessage": "Die generierten Reports grafisch den Status von Datenstromen und ihre Leistung im Laufe der Zeit<br/>Die folgenden zwei Arten von Informationen können Sie erhalten: <br/>-GÜltigkeit und die Anzahl der Datenstrome in Echtzeit verarbeitet <br/>-GÜltigkeit von Datenstromen in Bezug auf eine bestimmte Anwendung in einem bestimmten Monat.",
    "databaseHelpMessage": "Profiling einer Datenbank bedeutet die Schaffung der mÖglichkeit für die Daten eines Informations-Stream in einer Datenbank erfasst werden<br/>Was in diesem Fall wird aufgezeichnet ist nicht das Ergebnis der Validierung, es ist der Gesamtbetrag der Elemente, aus. . Angaben Stream innerhalb einer oder mehrerer Tabellen dynamisch von der Firewall erstellt<br/>Eine Anwendung muss nicht Datenbank Zunge. Allerdings ist das Schema<br/>Ein Schema kann auch keiner Datenbank verbunden sein, aber was dieser bedeutet auch, dass die Informationen Stream-Daten nicht aufgezeichnet werden.<br/>In diesem letzteren Fall die Firewall nur für die Analyse und statistische Zwecke verwendet wird, während in Bezug auf eine zugeordnete Datenbank der Firewall vor allem eingesetzt wird, um Filter und Informationen aufzeichnen Stream Daten.<br/>Received Validierung von Daten und Informationen Strom bleiben für die Anzeige auf 'Schemas-> Datastream erhalten' zur Verfügung.",
    "schemaHelpMessage": "Ein wesentliches Merkmal des Systems angeboten werden, besteht in der mÖglichkeit, problemlos die Schaffung einer Struktur, die Daten-Modell oder Schema genannt wird, dass die Eigenschaften seiner Bestandteile definiert<br/>Die Informationen stream daher ist aus eine Reihe von Daten, die die Regeln in das Schema detaillierte entspricht.<br/>In diesem Abschnitt können Sie das Schema und alle seine Felder, Test bestehenden Schemata, Associate vorhandenen Validierungsregeln bearbeiten oder neue erstellen, duplizieren Sie ein Schema zu erstellen eine neue Version davon, sowie der Anzeige der Ergebnisse aller, die empfangenen Informationen Bäche und schließlich schicken sie an das System zurück.",
    "userHelpMessage": "Das System ermöglicht den Zugriff auf verschiedene Funktionen durch Rollen:<br/>- Administrator<br/>- Applications Manager (verwaltet alle Anwendungen und Schemata der Kompetenz)<br/>- Operator (verwaltet nur die Schemata der Kompetenz)<br/>- Dispatcher (send-Streams in die Schemata der Kompetenz)<br/>nach der Registrierung eines Benutzers muss der Programm-Manager oder Administrator des Systems für Freigabe der zugewiesenen Rolle.<br/>.",
    "connectionsHelpMessage" : "Um ein externes System zuzugreifen, um den Datenstrom aus einer oder mehreren Dateien zu erhalten, müssen Sie den Zugriff auf Informationen und Datei-Informationen einzugeben und zu bestätigen Verfügbarkeit.",
    "plannerHelpMessage" : "Der Planer lassen starten eine oder mehrere Aufgaben, wenn nötig, ohne manuellen Eingriff.",
    "jobsHelpMessage" : "Die Aufgabe ermöglicht die Verbindung nach der Zeit in der Planer bestimmt, nimmt die angeforderte Datei und sendet sie an referenzierten Schema.",
    "adminHelpMessage": "Die Firewall überwacht in Informationen Streams kommen in aus den verschiedenen Arten von verfügbaren Diensten<br/>Aktivierung alle von ihnen geht es darum, den Kunden von den besten verfügbaren Service für ihre Ziele nutzen<br/>aktivieren. nur diejenigen, die unbedingt erforderlich sind bedeutet eine signifikante Performance-Gewinn durch nicht hören in den Diensten, die nie genutzt.<br/>Deaktivierung alle von ihnen können für Datenstrome Validierung nur durch ein Test-Tool erreichbar über 'Schemas-> Validate Datastream'.",
    "version": "<strong>Version </strong>",
    "credits": "<br/>&copy; 2015 foreSEE-Revolution ltd. Alle Rechte vorbehalten.<br/>Weitere Informationen unter <a href='http://www.see-r.com' target='_blank'>www.see-r.com</a>",
    "refresh": "auffrischen",
    "schemaValidationSuccess": "Erfolgreiche Schema-Validierung",
    "success": "Erfolg",
    "fail": "nicht bestanden",
    "schemaDocuments": "Papieren",
    "fieldNameNum": "Field Name sollte nicht mit Ziffer beginnen",
    "nameFieldInvalidFormate": "Das Feld Name muss mit dem Zeichen beginnen [a..z] oder [A..Z] oder [_]",
    "exportSchema": "Export Schema",
    "importSchema": "Import Schema",
    "forgetPasswordMsg": "Eine E-Mail mit neuen Passwort gesendet werden",
    "captchaNotClear": "nicht klar, für neue Bild klicken",
    "successDuplicateSchema": "Schema ist doppelt erfolgreich",
    "waitMessage": "Bitte warten...",
    "customErrors": "Fehlers nachricht des Brauchs",
    "macro": "Makro",
    "exportPng": "Bild exportiert Diagram",
    "optionInEE" : "Function available in<br/><br/><b>Enterprise Edition version</b>",
    "moduleName" : "Basic Edition",
    "shareSchema": "Share with the world",
    "sendStream" : "Send stream",
    "noValuesForDisplay" : "No values to display",
    "infoSharing": 'This schema validation will be shared with everyone on the site www.see-r.com ,authorized in advance by the system administrator.<br/>Thanks for participating!',
    "del": "Delete",
    "delMsg": "Do you want to delete",
    "supportedStandard": "Supported standard",
    "addCode": "Add Code",
    "persistenceMsg": "<b>Information taken from persistence.xml</b>",
    "dbConfigError" : "You need to create an emtpy db. <br/><br/> Please edit the persistence.xml file.",
    "successSqlValidation" : "Successful query validation",
    "unsuccessSqlValidation" : "Unsuccessful query validation",
    "clearEditor":"Clear editor",
    "errorTolerance" : "Error tolerance %",
    "test" : "Test",
    "generate" : "Generate",
    "deleteAll" : "Delete All",
    "deleteSelected" : "Delete Selected",
    "dqDuplicate" : "Duplicate",
    "dqSimilarity" : "Similarity",
    "dqStandardization" : "Standardization",
    "dqReplaceNull" : "Replace Null",
    "dqAnd" : "And (Inclusive)",
    "dqOr" : "Or (Exclusive)",
    "dqMatched" : "Matched",
    "dqUnMatched" : "Unmatched",
    "dqUpperCase" : "UPPER CASE",
    "dqLowerCase" : "lower case",
    "dqTitleCase" : "Title Case",
    "dqSentenceCase" : "Sentence Case",
    "dqDescreteMatch" : "Descrete Match",
    "dqDescreteNoMatch" : "Descrete No Match",
    "dqCardinality" : "Cardinality",
    "dqCardinalityEditable" : "Cardinality Editable",
    "dqTableComparison" : "Table Comparison",
    "dbInfoGeneral" : "General Info",
    "dbInfoSupport" : "Support Info",
    "dbInfoLimitation" : "Limitation Info",
    "dbInfoFunction" : "Functions Info",
    "dbInfoStdSqlType" : "Standard SQL Type Info",
    "dbInfoUserDefineType" : "User Define Type Info",
    "dbInfoCatalog" : "Catalog Info",
    "dbInfoSchema" : "Schema Info",
    "dbInfoProcedure" : "Procedure Info",
    "dbInfoParameter" : "Parameter Info",
    "dbInfoIndex" : "Index Info",
    "dbInfoTableModel" : "Table Model Info",
    "dbInfoDbMetadata" : "DB Metadata Info",
    "dbInfoTableMetadata" : "Table Metadata Info",
    "dbInfoData" : "Data Info",
    "dbInfoAllTables" : "All Tables Info",
    "dbInfoTable" : "Table Info",
    "dbInfoColumn" : "Column Info",
    "profilerHelp" : "Help",	
	"profilerHelpMessage" : "Click on the relavant database to load the profiler in Profiler -Databases grid",
	"schemaSiteGeneration" : "Site Schema Generation",
	"delRecursiveMsg": "This operation will delete recursively all schemas of",
	"sureMsg": ", are you sure?",
	"schemaCreateField": "Would you like to edit the schema fields?",
	"wizard": "Wizard",
    "forecasting" : "Forecasting"
};

_label = {
    "customCodeValidation":"Custom Code Validation",
    "triggerValidation":"Trigger Validation",
    "startDate": "Starttermin",
    "endDate": "Enddatum",
    "database": "Datenbank - Data sharing",
    "name": "Name",
    "application": "Anwendung",
    "streamType": "Schema-Typ",
    "customValidation": "Custom stream validation",
    "datenbanktyp": "Datenbank-Typ",
    "host": "Host",
    "port": "Port",
    "databaseName": "Datenbank Name",
    "userName": "Benutzername",
    "password": "Password",
    "clearEditor": "Clear-Editor",
    "compile": "kompilierenn",
    "expertMod": "Expert Modus",
    "rulel": "Regel",
    "javaMetaCode": "Java Meta-Code",
    "trackFields": "Track Felder",
    "dbTrackFields" : "DB fields",
    "trackField": "Track-Feld",
    "instructions": "Anweisungen",
    "applications": "Anwendungen - Stream container",
    "mainMenu": "Hauptmen",
    "newValue": "Neuer Wert",
    "value": "Wert",
    "allowedValues": "Allowed Wert",
    "schema": "Schema",
    "fieldDetail": "Field Detail",
    "dateType": "Date-Typ",
    "timeType": "Zeit-Typ",
    "users": "Nutzer",
    "surname": "Nachname",
    "email": "Email",
    "email_config" : "Email config",
    "registrationDate": "Registration date",
    "others": "Andere",
    "space": "Raum",
    "date": "Date",
    "time": "Zeit",
    "checked": "Getestet",
    "regularExpression": "Regulärer Ausdruck",
    "extraCheck": "Extra-Check",
    "credits_sw": "Open Source Produkte eingesetzt",
    "description": "Beschreibung",
    "link": "Link",
    "loadDocuments": "Load Papieren",
    "regExpStored": "Regular Expression gespeichert",
    "january": "Januar",
    "februar": "Februar",
    "march": "März",
    "april": "April",
    "may": "Mai",
    "june": "Juni",
    "july": "Juli",
    "august": "August",
    "september": "September",
    "october": "Oktober",
    "november": "November",
    "december": "Dezember",
    "active": "Aktive",
    "serverType": "Server-Typ",
    "server": "Servers available",
    "scheduler": "Scheduler",
    "schedulers": "Disponenten",
    "planner": "Planer",
    "alert": "Alarm",
    "status": "Status",
    "every": "Jeder",
    "task": "Aufgaben",
    "minute": "Minute",
    "hour": "Stunde",
    "day": "Tag",
    "month": "Monat",
    "week": "Woche",
    "credits": "Credits",
    "admin": "Administration",
    "connections": "Verbindungen",
    "directory": "Verzeichnis",
    "fileName": "Dateiname",
    "service": "Dienst",
    "jobs": "Jobs",
    "forgetPassword": "Passwort vergessen",
    "register": "Registrieren",
    "login": "Login",
    "dob": "Geburtsdatum",
    "securityCode": "Sicherheitscode",
    "role": "Rolle",
    "min": "Weniger",
    "max": "größer",
    "equal": "gleich",
    "language":" Die Sprache",
    "enabled":"Erreichbar",
    "disabled":"Unzugaenglich",
    "version":"Version",
    "planned":"Geplant",
    "oneShoot":"ein shot",
    "inputDatabase": "Database for input",
    "outputDatabase": "Database for output",
    "storeDatabase": "Database for storing",
    "validationDatabase": "Database for validation",
    "contactUs":"Kontaktieren Sie uns",
    "send":"senden",
    "firstName":"Vorname",
    "lastName":"Nachname",
    "emailAddress":"Email-Adresse",
    "message":"messaggio",
    "info_service":"Info service",
    "streamLoggingOK":"OK",
    "streamLoggingKO":"Error",
    "streamLoggingWarning":"Warning",
    "downloadConnFile":"Test",
    "everyseconds":"Every Seconds",
    "generationStream":"Stream generation",
    "streamLoadingLabel":"Stream loading",
    "base" : "Base",
    "dataStream" : "Datastream",
    "streamLogging" : "Stream logging",
    "timeWindow" : "Time window",
    "forecasting" : "Forecasting",
    "delimiter" : "Delimiter",
    "available" : "Available",
    "speed" : "Speed",
    "accuracy" : "Accuracy",
    "sentDataStream" : "Datastream to be sent",
    "importFile" : "Import File",
    "import" : "Import",
    "db_fields" : "Database fields",
    "maxOccurs" : "maxOccurs:",
    "unbounded" : "unbounded",
    "attributes": "Attributes",
    "attributeDetail": "Attribute detail",
    "companyName": "Company name",
    "companyWebsite": "Company website",
    "position": "Position",
    "authorize": "I authorize the use of my personal data.",
    "trimChar" : "Trim char:",
    "linkToDb" : "DB field",
    "standardValidations" : "Standard stream validation",
    "versionLibrary" : "Version Library",
    "queryGeneration" : "Query generation",
    "resultSet" : "Result set",
    "realTime" : "Real Time",
    "monthlyState" : "Monthly State",
    "annualState" : "Annual State",
    "defaultDatabase" : "Default Database",
    "inputDir" : "Input directory",
    "outputDir" : "Output directory",
    "ftpConfig" : "FTP Config",
    "linked" : "Linked",
    "trigger" : "Trigger",
    "code":"Code",
    "cleareditor":"Clear editor",
    "validate":"Validate" ,
    "sendValidation" : "Send to validation",
    "modifyProfile" : "Modify Profile",
    "continue": "Continue",
    "editQuery" : "Edit query",
    "validateQuery" : "Validate query",
    "saveQuery" : "Save query",
    "deleteQuery" : "Delete query",
    "connType":"Connection type",
    "deleteLinkToDb" : "Delete link to database",
    "linkToDatabase" : "Link to database",
    "linkToDbSelected" : "DB field selected",
    "monthYear" : "Month of the Year",
    "dayMonth" : "Days of the month",
    "monthStGraph" : "Monthly State Graph",
    "annualStGraph" : "Annual State Graph",
    "realTimeData" : "Real Time Data Load",
    "numDataStream" : "Numbers of Data Stream",
    "currentTimeValidation" : "Current Time",
    "bar" : "Bar",
    "relevance" : "Relevance",
    "warnTolerance" : "Warning tolerance",
    "emailSettings" : "Email settings",
    "protocol" : "Protocol",
    "encoding" : "Encoding",
    "smtpsTimeout" : "SMTPS TIMEOUT",
    "startttls" : "STARTTLS",
    "smtpsAuthenticate" : "SMTPS AUTHENTICATE",
    "ftp" : "FTP",
    "detailedState" : "Detailed State",
    "detailedStGraph" : "Detailed chart in Real Time",
    "dataStreamTitle" : "Data Stream",
    "schemas" : "Schemas",
    "datastreams" : "Datastreams",
    "log" : "Log",
    "id" : "Id",
    "profiler" : "Profiler",
    "dbInfo" : "DataBase Info",
    "dataQuality" : "Data Quality (Beta)",
	"profilerDatabase" : "Profiler - Databases",
    "websiteAllPage" : "Website URL - all pages",
    "websiteSinglePage" : "Website URL - single page",
    "streamManagement" : "Stream Management",
    "search_desc" : "Search in description",
    "matching_recs" : "Matching records",
    "selectApplications" : "Select Applications",
    "selectImportFile" : "Select a file to import",
    "no_matching_recs" : "No Record Found",
    "significativeLags" : "Significative Lags",
    "maxACatLags" :"Max AC at Lags",
    "maxACValues" : "Max AC Values",
    "mean" : "Mean",
    "count" : "Count",
    "dimension" : "Dimension",
    "sequenceLength" : "Forecasting Sequence Length",
    "ACValue" : "AC Value",
    "fitness" : "Fitness Index",
    "size" : "Size",
    "dataAnalysis" : "Data Analysis",
    "csvFileLabel" : "1. Select a csv data file with the numeric representation of the events to use for forecasting.",
    "eventSpaceEstimation" : "Event Space Estimation",
    "ACFValue" : "ACF Value:",
    "forecastLabel" : "2. Input the number of events to forecast",
    "start" : "Start",
    "remainingElaboration" : "Remaining Elaboration:",
    "forecastedValues" : "FORECASTED VALUES:",
    "noSqlLog" : "NoSQL Log",
    "mongoDB" : "MongoDB"
};


_button = {
    "IF": "ABER",
    "ENDIF": "ENDE WENN",
    "THEN": "DANN",
    "AND": "UND",
    "OR": "ABER",
    "DIVERSE": "Anders",
    "EQUAL": "Gleich",
    "EMPTY": "Leer",
    "VALUE": "Wert",
    "STRING": "String",
    "ERROR": "Fehler",
    "INSERT" : "INSERT",
    "ADD" : "ADD"
};

_streamType = {
    "XML": "XML",
    "XMLEXI": "XML EXI",
    "flatFileFixedPosition": "Flat File Feste Position",
    "flatFileDelimited": "Flat File Getrennt",
    "JSON": "JSON",
    "EXCEL": "MS Excel",
	"HL7" : "HL7",
	"SWIFT" : "SWIFT",
	"EDI_CICA" : "EDI CICA"
};

_eventStatus = {
		"KO":"Error",
		"OK":"Ok",
		"Warning":"Warning"
};
	
_serviceType = {
    "FTP": "FTP",
    "SAMBAWIN": "Samba / Win",
    "HTTP": "HTTP"
};
_status = {
		"info": "Info",
		"error": "Error",
		"warning": "Warning"
};
_months = {
    "1": "Januar",
    "2": "Februar",
    "3": "März",
    "4": "April",
    "5": "Mai",
    "6": "Juni",
    "7": "Juli",
    "8": "August",
    "9": "September",
    "10": "Oktober",
    "11": "November",
    "12": "Dezember"
};

_weekDays = {
    "1": "Sonntag",
    "2": "Montag",
    "3": "Dienstag",
    "4": "Mittwoche",
    "5": "Donnerstag",
    "6": "Freitag",
    "7": "Samstag"
};

_role = {
    "admin": "Der Administrator",
    "appManager": "Der Manager der Anwendung",
    "operator": "Der Operator",
    "dispatcher": "Der Dispatcher",
    "user": "Der Benutzer"
};

_language = {
    "english": "English",
    "italian": "Italienisch",
    "german" : "Deutsch",
    "russian": "Russisch"
};