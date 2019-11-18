import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json";

import JobsList from "./components/jobsList";

let language= navigator.language||navigator.userLanguage;
let message=language==="en"?localeEnMessages:localeEsMessages;

ReactDOM.render(
	<IntlProvider locale={language} messages= {message}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);