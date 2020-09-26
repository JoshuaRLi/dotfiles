// Some options might be outdated, I don't know how to programmatically validate them.

// Note: some people like to disable this stuff but i don't:
//    - cookies, history, bookmarks, session restore
//    - (most) caching
//    - firefox sync, screenshots
//    - container tabs
//    - wasm
//    - clipboard
//    - indexeddb (required by ublock)
//    - pdfjs, webgl
//    - svg rendering
//    - protocol handler whitelist

// reverted due to breakage
user_pref("dom.storage.enabled", true);                 // DOM storage used by supercookies, but this was breaking Standard Notes
user_pref("dom.event.clipboardevents.enabled", true);   // breaks google docs + fb messenger "could not display composer"
user_pref("network.http.sendRefererHeader", 2);         // 0 or 1 breaks a lot of sites, like bandcamp/twitter/pixiv

// Under X, run firefox >= 80 with MOZ_X11_EGL=1 and MOZ_WEBRENDER=1
user_pref("media.ffmpeg.vaapi.enabled", true);
user_pref("media.ffvpx.enabled", false);
user_pref("gfx.webrender.all", true);

// perf: disable smooth scroll, which eats a non-trivial amount of CPU,
// especially if OpenGL OMTC is enabled via layers.acceleration.force-enabled
user_pref("general.smoothScroll", false);
user_pref("layers.acceleration.force-enabled", true);

// perf: disable service workers, i have no need for them
user_pref("dom.serviceWorkers.enabled", false);

// perf: disable UI animations
user_pref("toolkit.cosmeticAnimations.enabled", false);
user_pref("browser.download.animateNotifications", false);

// perf: cripple multimedia
user_pref("media.autoplay.default", 1);
user_pref("image.animation_mode", "none");

// security: disable various technologies
user_pref("media.peerconnection.enabled", false);  // webrtc
user_pref("plugin.state.flash",	0);
user_pref("plugin.state.java", 1);
user_pref("media.webspeech.recognition.enable", false);
user_pref("media.webspeech.synth.enabled", false);
user_pref("dom.vr.enabled", false);
user_pref("camera.control.face_detection.enabled", false);

// privacy: cripple geolocation
user_pref("geo.enabled", false);
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.countryCode", "US");
user_pref("browser.search.region", "US");
user_pref("browser.search.geoip.url", "");

// privacy: disable various apis
user_pref("media.navigator.enabled", false);  // microphone and camera status
user_pref("dom.enable_performance", false);
user_pref("dom.enable_user_timing",	false);
user_pref("dom.enable_resource_timing", false);
user_pref("dom.netinfo.enabled", false);
user_pref("dom.network.enabled", false);
user_pref("dom.battery.enabled", false);
user_pref("device.sensors.enabled", false);
user_pref("dom.webaudio.enabled", false);
user_pref("dom.telephony.enabled", false);
user_pref("dom.gamepad.enabled", false);
user_pref("dom.vibrator.enabled", false);

// privacy: cripple tracking, analytics, fingerprinting
user_pref("beacon.enabled", false);
user_pref("browser.send_pings", false);  // disable hyperlink ping tracking
user_pref("media.video_stats.enabled", false);
user_pref("browser.cache.offline.enable", false);
user_pref("security.ssl.disable_session_identifiers", true);
user_pref("privacy.trackingprotection.enabled", false);  // redundant due to ublock, so disabling
user_pref("privacy.trackingprotection.pbmode.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);

// security: mixed content blocking
user_pref("security.mixed_content.block_active_content", true);
user_pref("security.mixed_content.block_display_content",	true);

// privacy / perf: dumb down bar
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.trimURLs", false);

// privacy + perf: no telemetry / reporting
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.prompted", 2);
user_pref("toolkit.telemetry.rejected", true);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.unifiedIsOptIn", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.healthreport.documentServerURI", "");
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("extensions.webcompat-reporter.enabled", false);

// privacy: no experiments / studies
user_pref("network.allow-experiments", false);
user_pref("experiments.activeExperiment", false);
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.supported", false);
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("extensions.shield-recipe-client.api_url", "");
user_pref("extensions.shield-recipe-client.enabled", false);

// perf: blank out new tab page
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", true);
user_pref("privacy.usercontext.about_newtab_segregation.enabled", true);

// perf: disable speculative / hidden networking
user_pref("network.http.speculative-parallel-limit", "0");  // don't speculatively bootstrap (tls handshake) connections on link hover
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.prefetch-next", false);  // ignore prefetch tagged links
user_pref("network.predictor.enabled", false);
user_pref("browser.aboutHomeSnippets.updateUrl", "");
user_pref("browser.search.update", false);
user_pref("network.connectivity-service.enabled", false);
user_pref("browser.selfsupport.url", "");  // turn off captive portal detection
user_pref("network.captive-portal-service.enabled", false);
user_pref("captivedetect.canonicalURL", "");

// perf: etc
user_pref("layout.spellcheckDefault", 0);  // disable spell checking
user_pref("browser.sessionstore.interval", 300000);  // save session to disk every 5 minutes instead of 15 seconds

// privacy: etc
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.donottrackheader.value", 1);
user_pref("layout.css.visited_links_enabled", false);

// security: etc
user_pref("security.csp.enable", true);
user_pref("security.sri.enable", true);
user_pref("security.tls.version.min", 3);  // TLS 1.2
user_pref("security.tls.version.max", 4);  // TLS 1.3
user_pref("security.ssl.require_safe_negotiation", true);  // probably noop since min is tls 1.2, but just in case
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("security.OCSP.enabled", 0);  // disable OCSP - when will this not suck?
user_pref("security.cert_pinning.enforcement_level", 2);  // strict cert pinning
user_pref("network.stricttransportsecurity.preloadlist", true);
user_pref("security.ssl.enable_false_start", false);
user_pref("network.IDN_show_punycode", true);
user_pref("security.pki.sha1_enforcement_level", 1);

// annoyances
user_pref("dom.webnotifications.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.uitour.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.library.activity-stream.enabled", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.chrome.toolbar_tips", false);
user_pref("extensions.pocket.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.webservice.discoverURL", "");
user_pref("general.warnOnAboutConfig", false);;
user_pref("browser.disableResetPrompt", true);
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.userAgentID", "");

// extensions
user_pref("app.update.enabled", false);  // i update firefox manually
user_pref("app.update.auto", false);
user_pref("app.update.service.enabled", false);
user_pref("app.update.staging.enabled", false);
user_pref("app.update.silent", false);
user_pref("extensions.update.enabled", true);  // but trust my few extensions to auto update
user_pref("extensions.blocklist.enabled", false);  // don't need handholding
user_pref("extensions.blocklist.url", "");
user_pref("services.blocklist.update_enabled", false);
user_pref("extensions.systemAddon.update.enabled", false);  // and opt out of hidden/system addons (remove features profile dir as well as /usr/lib/firefox/browser/features, except screenshots@mozilla.org.xpi)
user_pref("extensions.systemAddon.update.url", "");  // https://github.com/pyllyukko/user.js/issues/419
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("lightweightThemes.update.enabled", false);
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.webservice.discoverURL", "");

// disable dev tools i don't need (webide, remote debug)
user_pref("devtools.webide.enabled", false);
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.chrome.enabled", false);
user_pref("devtools.debugger.force-local", true);

// misc.
user_pref("browser.startup.page", 3);  // previous-session-tabs are restored on launch
user_pref("services.sync.engine.passwords", false);
user_pref("services.sync.declinedEngines", "passwords,addresses");
user_pref("network.proxy.no_proxies_on", "localhost, 127.0.0.1, 192.168.1.0/24, 0.0.0.0, 10.0.0.0/24");  // blacklist LAN and special ips from SOCKS proxy
user_pref("signon.rememberSignons", false);  // disable password store
user_pref("browser.formfill.enable", false);
user_pref("signon.autofillForms", false);
user_pref("dom.forms.autocomplete.formautofill", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);
user_pref("browser.download.manager.retention",	0);  // disable download history
user_pref("media.gmp-widevinecdm.enabled", false);  // do not play DRM-controlled html5 content
user_pref("dom.mozTCPSocket.enabled", false);
user_pref("network.jar.open-unsafe-types", false);
user_pref("network.dns.blockDotOnion", true);
user_pref("browser.offline-apps.notify", true);
