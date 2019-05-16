// current: firefox 65 from arch linux repositories

// note: some people like to disable this stuff but i don't
//    - cookies, history, bookmarks
//    - caching
//    - firefox sync
//    - firefox screenshots
//    - container tabs
//    - webrtc
//    - openh264
//    - wasm
//    - clipboard
//    - indexeddb (required by ublock)
//    - svg rendering
//    - protocol handler whitelist

// note: some people like to enable this stuff but i don't
//    - first party isolation (some breakage and i use container tabs)

// reverted due to breakage
user_pref("dom.storage.enabled", true);  // DOM storage used by supercookies, but this was breaking Standard Notes
user_pref("browser.display.use_document_fonts", 1);  // i'll just disable fonts selectively per-domain in uBlock
user_pref("dom.event.clipboardevents.enabled", true);  // breaks google docs + fb messenger "could not display composer"
user_pref("network.http.sendRefererHeader", 2);  // 0 or 1 breaks a lot of sites, like bandcamp/twitter/pixiv

// perf: disable smooth scroll, which eats a non-trivial amount of CPU,
// especially if OpenGL OMTC is enabled via layers.acceleration.force-enabled
user_pref("general.smoothScroll", false);

// perf: explicitly force hardware acceleration
user_pref("layers.acceleration.force-enabled", true);

// perf: disable service workers, i have no need for them
user_pref("dom.serviceWorkers.enabled", false);

// perf: disable UI animations
user_pref("toolkit.cosmeticAnimations.enabled", false);
user_pref("browser.download.animateNotifications", false);

// perf: cripple multimedia
user_pref("media.autoplay.default", 1);
user_pref("image.animation_mode", "none");

// security: various disables
user_pref("webgl.disabled", true);
user_pref("pdfjs.disabled", true);

// perf: disable tracking protection - this is taken care of by uBlock
user_pref("privacy.trackingprotection.enabled", false);
user_pref("privacy.trackingprotection.pbmode.enabled", false);

// privacy: cripple geolocation
user_pref("geo.enabled", false);
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.countryCode", "US");
user_pref("browser.search.region", "US");
user_pref("browser.search.geoip.url", "");

// privacy: disable various apis
user_pref("media.navigator.enabled", false);
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

// security: disable various technologies
user_pref("plugin.state.flash",	0);
user_pref("plugin.state.java", 1);
user_pref("media.webspeech.recognition.enable", false);
user_pref("media.webspeech.synth.enabled", false);
user_pref("dom.vr.enabled", false);
user_pref("camera.control.face_detection.enabled", false);
user_pref("javascript.options.asmjs",	false);  // until asm.js spec is stable

// privacy: cripple tracking, analytics, fingerprinting
user_pref("beacon.enabled", false);
user_pref("browser.send_pings", false);  // disable hyperlink ping tracking
user_pref("media.video_stats.enabled", false);
user_pref("browser.cache.offline.enable", false);
user_pref("security.ssl.disable_session_identifiers", true);

// mixed content blocking
user_pref("security.mixed_content.block_active_content", true);
user_pref("security.mixed_content.block_display_content",	true);

// privacy: localization overrides
user_pref("intl.locale.matchOS", false);
user_pref("intl.accept_languages", "en-US, en");
user_pref("javascript.use_us_english_locale", true);

// privacy / perf: dumb down bar
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.trimURLs", false);

// disable dev tools i don't need (webide, remote debug)
user_pref("devtools.webide.enabled", false);
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.chrome.enabled", false);
user_pref("devtools.debugger.force-local", true);

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

// privacy + perf: disable google safebrowsing, i know what i'm doing
user_pref("browser.safebrowsing.appRepURL", "");
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);

// perf: blank out new tab page
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", true);
user_pref("privacy.usercontext.about_newtab_segregation.enabled", true);

// perf: save session to disk every 5 minutes instead of 15 seconds
user_pref("browser.sessionstore.interval", 300000);

// perf: disable speculative / hidden networking
user_pref("network.http.speculative-parallel-limit", "0");  // don't speculatively bootstrap (tls handshake) connections on link hover
user_pref("network.dns.disablePrefetch", true);  // dns prefetching
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.prefetch-next", false);  // ignore prefetch tagged links
user_pref("network.predictor.enabled", false);

// perf: disable various other automatic networking
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections
user_pref("network.captive-portal-service.enabled", false);
user_pref("browser.aboutHomeSnippets.updateUrl", "");
user_pref("browser.search.update", false);

// perf: etc
user_pref("layout.spellcheckDefault", 0);  // disable spell checking

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
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr", false);
user_pref("browser.chrome.toolbar_tips", false);
user_pref("browser.pocket.enabled", false);
user_pref("extensions.pocket.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.selfsupport.url", "");
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.webservice.discoverURL", "");
user_pref("general.warnOnAboutConfig", false);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.disableResetPrompt", true);

// misc. explicit preferences
user_pref("app.update.enabled", false);  // i update firefox manually
user_pref("extensions.update.enabled", true);  // but trust my few extensions to auto update
user_pref("extensions.systemAddon.update.enabled", false);
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.startup.page", 3);  // previous-session-tabs are restored on launch
user_pref("services.sync.engine.passwords", false);
user_pref("services.sync.declinedEngines", "passwords,addresses");
user_pref("network.proxy.no_proxies_on", "localhost, 127.0.0.1, 192.168.1.0/24, 0.0.0.0, 10.0.0.0/24");  // blacklist LAN and special ips from SOCKS proxy
user_pref("signon.rememberSignons", false);  // disable password store
user_pref("browser.formfill.enable", false);
user_pref("signon.autofillForms", false);
user_pref("browser.download.manager.retention",	0);  // disable download history

// misc.
user_pref("dom.forms.autocomplete.formautofill", false);
user_pref("dom.mozTCPSocket.enabled", false);
user_pref("network.jar.open-unsafe-types", false);
user_pref("network.dns.blockDotOnion", true);
user_pref("browser.offline-apps.notify", true);

// ciphers stolen from pyllyukko/user.js, thanks!

// PREF: Disable null ciphers
user_pref("security.ssl3.rsa_null_sha",				false);
user_pref("security.ssl3.rsa_null_md5",				false);
user_pref("security.ssl3.ecdhe_rsa_null_sha",			false);
user_pref("security.ssl3.ecdhe_ecdsa_null_sha",			false);
user_pref("security.ssl3.ecdh_rsa_null_sha",			false);
user_pref("security.ssl3.ecdh_ecdsa_null_sha",			false);

// PREF: Disable SEED cipher
// https://en.wikipedia.org/wiki/SEED
user_pref("security.ssl3.rsa_seed_sha",				false);

// PREF: Disable 40/56/128-bit ciphers
// 40-bit ciphers
user_pref("security.ssl3.rsa_rc4_40_md5",			false);
user_pref("security.ssl3.rsa_rc2_40_md5",			false);
// 56-bit ciphers
user_pref("security.ssl3.rsa_1024_rc4_56_sha",			false);
// 128-bit ciphers
user_pref("security.ssl3.rsa_camellia_128_sha",			false);
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha",		false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha",		false);
user_pref("security.ssl3.ecdh_rsa_aes_128_sha",			false);
user_pref("security.ssl3.ecdh_ecdsa_aes_128_sha",		false);
user_pref("security.ssl3.dhe_rsa_camellia_128_sha",		false);
user_pref("security.ssl3.dhe_rsa_aes_128_sha",			false);

// PREF: Disable RC4
// https://developer.mozilla.org/en-US/Firefox/Releases/38#Security
// https://bugzilla.mozilla.org/show_bug.cgi?id=1138882
// https://rc4.io/
// https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-2566
user_pref("security.ssl3.ecdh_ecdsa_rc4_128_sha",		false);
user_pref("security.ssl3.ecdh_rsa_rc4_128_sha",			false);
user_pref("security.ssl3.ecdhe_ecdsa_rc4_128_sha",		false);
user_pref("security.ssl3.ecdhe_rsa_rc4_128_sha",		false);
user_pref("security.ssl3.rsa_rc4_128_md5",			false);
user_pref("security.ssl3.rsa_rc4_128_sha",			false);
user_pref("security.tls.unrestricted_rc4_fallback",		false);

// PREF: Disable 3DES (effective key size is < 128)
// https://en.wikipedia.org/wiki/3des#Security
// http://en.citizendium.org/wiki/Meet-in-the-middle_attack
// http://www-archive.mozilla.org/projects/security/pki/nss/ssl/fips-ssl-ciphersuites.html
user_pref("security.ssl3.dhe_dss_des_ede3_sha",			false);
user_pref("security.ssl3.dhe_rsa_des_ede3_sha",			false);
user_pref("security.ssl3.ecdh_ecdsa_des_ede3_sha",		false);
user_pref("security.ssl3.ecdh_rsa_des_ede3_sha",		false);
user_pref("security.ssl3.ecdhe_ecdsa_des_ede3_sha",		false);
user_pref("security.ssl3.ecdhe_rsa_des_ede3_sha",		false);
user_pref("security.ssl3.rsa_des_ede3_sha",			false);
user_pref("security.ssl3.rsa_fips_des_ede3_sha",		false);

// PREF: Disable ciphers with ECDH (non-ephemeral)
user_pref("security.ssl3.ecdh_rsa_aes_256_sha",			false);
user_pref("security.ssl3.ecdh_ecdsa_aes_256_sha",		false);

// PREF: Disable 256 bits ciphers without PFS
user_pref("security.ssl3.rsa_camellia_256_sha",			false);

// PREF: Enable ciphers with ECDHE and key size > 128bits
user_pref("security.ssl3.ecdhe_rsa_aes_256_sha",		true); // 0xc014
user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha",		true); // 0xc00a

// PREF: Enable GCM ciphers (TLSv1.2 only)
// https://en.wikipedia.org/wiki/Galois/Counter_Mode
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_gcm_sha256",	true); // 0xc02b
user_pref("security.ssl3.ecdhe_rsa_aes_128_gcm_sha256",		true); // 0xc02f

// PREF: Enable ChaCha20 and Poly1305 (Firefox >= 47)
// https://www.mozilla.org/en-US/firefox/47.0/releasenotes/
// https://tools.ietf.org/html/rfc7905
// https://bugzilla.mozilla.org/show_bug.cgi?id=917571
// https://bugzilla.mozilla.org/show_bug.cgi?id=1247860
// https://cr.yp.to/chacha.html
user_pref("security.ssl3.ecdhe_ecdsa_chacha20_poly1305_sha256",	true);
user_pref("security.ssl3.ecdhe_rsa_chacha20_poly1305_sha256",	true);

// PREF: Disable ciphers susceptible to the logjam attack
// https://weakdh.org/
user_pref("security.ssl3.dhe_rsa_camellia_256_sha",		false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha",			false);

// PREF: Disable ciphers with DSA (max 1024 bits)
user_pref("security.ssl3.dhe_dss_aes_128_sha",			false);
user_pref("security.ssl3.dhe_dss_aes_256_sha",			false);
user_pref("security.ssl3.dhe_dss_camellia_128_sha",		false);
user_pref("security.ssl3.dhe_dss_camellia_256_sha",		false);

// PREF: Fallbacks due compatibility reasons
user_pref("security.ssl3.rsa_aes_256_sha",			true); // 0x35
user_pref("security.ssl3.rsa_aes_128_sha",			true); // 0x2f
