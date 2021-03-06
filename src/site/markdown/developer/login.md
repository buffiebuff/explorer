<!--
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
-->
Logging in
====================
The intention of the Login feature is for users to be able to save their OpenSocial Explorer
session while they are logged in, including any new specs or services that they have created.
Presently, there are three ways of logging in - Google OpenID, Google OAuth, and Facebook OAuth.
Google OAuth and Facebook OAuth require app client registration in order for the OSE to be able 
to use the particular platform's APIs ask users for their information.

Regardless of login method, a security token is generated from the user information obtained 
from user authorization or authentication. This token is the unique identifier of the user.
As a developer, you must configure the app client-id and client-secret information for these login methods in explorer.properties
in order to use the login features. Currently, the login portion of the [explorer.properties](https://github.com/OpenSocial/explorer/blob/master/java/server/config/opensocial-explorer.properties)
file looks like this:

	#GoogleLogin details
	explorer.googlelogin.clientid=<insert client id here>
	explorer.googlelogin.clientsecret=<insert client secret here>
	explorer.googlelogin.redirecturi=%origin%%contextRoot%/googleLogin/token
	
	#FacebookLogin details
	explorer.facebooklogin.clientid=<insert client id here>
	explorer.facebooklogin.clientsecret=<insert client secret here>
	explorer.facebooklogin.redirecturi=%origin%%contextRoot%/facebookLogin/token

The servlets receive this metadata via Google Guice injection and use it to generate 
the user login popup url and for the security token creation process.

###Facebook OAuth Login
---------------------
You can register for a Facebook app at [Facebook Developers](https://developers.facebook.com/apps).
Once registered, set the Site URL in the App Dashboard to your development environment's URL to the OpenSocial Explorer project.
For example, http://localhost:8080 or http://localhost:8080/ose.

Now you can fill in the Facebook section of [explorer.properties](https://github.com/OpenSocial/explorer/blob/master/java/server/config/opensocial-explorer.properties):
enter the App Id and App Secret from the dashboard into clientid and clientsecret.

The redirecturi is the site URL with the endpoint served by the Facebook Login servlet: facebookLogin/token.
If you need to change the endpoint, modify the [Facebook login servlet](https://github.com/OpenSocial/explorer/blob/master/java/server/src/main/java/org/opensocial/explorer/server/login/FacebookLoginServlet.java)
file accordingly as well as the [web.xml](https://github.com/OpenSocial/explorer/blob/master/java/server/src/main/webapp/WEB-INF/web.xml).
Otherwise, leave the redirecturi as is.

###Google OAuth Login

You can register for Google API access at [Google API Console](https://code.google.com/apis/console).
Click on the API Access tab, then "Create Client ID", select web application, and use the same Site URL from the previous section for the hostname.

You can now fill out the Google section of [explorer.properties](https://github.com/OpenSocial/explorer/blob/master/java/server/config/opensocial-explorer.properties):
enter the given Client ID and Client secret.
Similar to Facebook OAuth, the redirecturi is the Site URL with the endpoint served by the Google Login servlet: googleLogin/token.

Again, be sure to modify both the [Google login servlet](https://github.com/OpenSocial/explorer/blob/master/java/server/src/main/java/org/opensocial/explorer/server/login/GoogleLoginServlet.java) 
and [web.xml](https://github.com/OpenSocial/explorer/blob/master/java/server/src/main/webapp/WEB-INF/web.xml) if you need to change this.


