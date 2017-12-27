/**
 * Created by Durgaprasad Budhwani on 12/24/2017.
 */
// @flow

import 'github-markdown-css';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

const styles = () => ({
  container: {
    padding: 20,
  },
});

type Props = {
  classes : any,
}

class ReadMe extends PureComponent<Props> {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const readme = "<div class=\"announce instapaper_body md\" data-path=\"README.md\" id=\"readme\"><article class=\"markdown-body entry-content\" itemprop=\"text\"><h1 class=\"package-name-redundant\">NativeBase <a href=\"http://slack.nativebase.io/\" rel=\"nofollow\"><img src=\"https://camo.githubusercontent.com/791c31d058d74da4791ef9b010423824df63a507/687474703a2f2f736c61636b2e6e6174697665626173652e696f2f62616467652e737667\" alt=\"\" data-canonical-src=\"http://slack.nativebase.io/badge.svg\" style=\"max-width:100%;\"></a> <a href=\"https://travis-ci.org/GeekyAnts/NativeBase\" rel=\"nofollow\"><img src=\"https://camo.githubusercontent.com/9aa8b6ad81b2c83cee488572792939f768af739d/68747470733a2f2f7472617669732d63692e6f72672f4765656b79416e74732f4e6174697665426173652e7376673f6272616e63683d6d6173746572\" alt=\"Build Status\" data-canonical-src=\"https://travis-ci.org/GeekyAnts/NativeBase.svg?branch=master\" style=\"max-width:100%;\"></a> <a href=\"https://badge.fury.io/js/native-base\" rel=\"nofollow\"><img src=\"https://camo.githubusercontent.com/319375929bbeec63bccaf4a7bc28eb6517142402/68747470733a2f2f62616467652e667572792e696f2f6a732f6e61746976652d626173652e737667\" alt=\"npm version\" data-canonical-src=\"https://badge.fury.io/js/native-base.svg\" style=\"max-width:100%;\"></a></h1>\n<p><a href=\"https://nodei.co/npm/native-base/\" rel=\"nofollow\"><img src=\"https://camo.githubusercontent.com/ec63a52c8b230da70c268986b50656c144e0261a/68747470733a2f2f6e6f6465692e636f2f6e706d2f6e61746976652d626173652e706e673f646f776e6c6f6164733d74727565\" alt=\"NPM\" data-canonical-src=\"https://nodei.co/npm/native-base.png?downloads=true\" style=\"max-width:100%;\"></a></p>\n<p><a href=\"https://nodei.co/npm/native-base/\" rel=\"nofollow\"><img src=\"https://camo.githubusercontent.com/c6b8433dcf9831cfeac483128e75449bf2afafda/68747470733a2f2f6e6f6465692e636f2f6e706d2d646c2f6e61746976652d626173652e706e673f6865696768743d32\" alt=\"NPM\" data-canonical-src=\"https://nodei.co/npm-dl/native-base.png?height=2\" style=\"max-width:100%;\"></a></p>\n<p class=\"package-description-redundant\">Essential cross-platform UI components for React Native</p>\n<p>Updated docs <a href=\"https://docs.nativebase.io/\" rel=\"nofollow\">here!</a></p>\n<p><strong>For people having trouble upgrading to 2.1.5, check <a href=\"https://github.com/GeekyAnts/NativeBase/issues/928\">this.</a></strong></p>\n<h3 id=\"use-v2-2-1-with-latest-react-native-version-0-46-older-versions-may-break\" class=\"deep-link\"><a href=\"#use-v2-2-1-with-latest-react-native-version-0-46-older-versions-may-break\">Use v2.2.1 with latest react-native version(0.46). Older versions may break.</a></h3>\n<p><a href=\"https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/iOS.gif\" target=\"_blank\"><img src=\"https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/iOS.gif\" alt=\"Demo\" style=\"max-width:100%;\"></a>\n<a href=\"https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/Android.gif\" target=\"_blank\"><img src=\"https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/Android.gif\" alt=\"Demo\" style=\"max-width:100%;\"></a></p>\n<h1 id=\"table-of-content\" class=\"deep-link\"><a href=\"#table-of-content\">Table of Content</a></h1>\n<ol>\n<li><a href=\"#1-what-is-nativebase\">What is NativeBase?</a></li>\n<li><a href=\"#2-why-nativebase\">Why NativeBase?</a></li>\n<li><a href=\"https://github.com/GeekyAnts/NativeBase-KitchenSink\">KitchenSink App</a></li>\n<li><a href=\"#4-getting-started\">Getting Started</a></li>\n<li><a href=\"#5-components\">Components</a></li>\n<li><a href=\"#6-compatibility-versions\">Compatibility Versions</a></li>\n<li><a href=\"#7-native-starter-kit\">Native Starter Kit</a></li>\n<li><a href=\"#8-nativebase-market\">NativeBase Market</a></li>\n<li><a href=\"#9-documentation\">Documentation</a></li>\n<li><a href=\"#10-website\">Website</a></li>\n<li><a href=\"#11-quick-links-to-nativebase\">Quick Links to NativeBase</a></li>\n<li><a href=\"#12-about-the-creators\">About the creators</a></li>\n</ol>\n<h2 id=\"1-what-is-nativebase\" class=\"deep-link\"><a href=\"#1-what-is-nativebase\">1. What is NativeBase?</a></h2>\n<p><a href=\"https://nativebase.io/\" rel=\"nofollow\">NativeBase</a> is a sleek, ingenious and dynamic front-end framework created by passionate React Loving team at <a href=\"https://geekyants.com/\" rel=\"nofollow\">Geekyants.com</a> to build cross platform Android &amp; iOS mobile apps using ready to use generic components of React Native.</p>\n<h2 id=\"2-why-nativebase\" class=\"deep-link\"><a href=\"#2-why-nativebase\">2. Why NativeBase?</a></h2>\n<p>What is really great with <a href=\"https://nativebase.io/\" rel=\"nofollow\">NativeBase</a> is that you can use shared UI cross-platform components, which will drastically increase your productivity. When using NativeBase, you can use any native third-party libraries out of the box.<br></p>\n<p><strong>Recommended by</strong> <em>Microsoft</em></p>\n<blockquote>\n<p>If you&apos;re looking to get started with React Native + CodePush, and are looking for an awesome starter kit, you should check out Native Starter Pro - <a href=\"https://github.com/Microsoft/react-native-code-push#example-apps--starters\">Microsoft&apos;s react-native-code-push repo</a></p>\n</blockquote>\n<p><strong>Recommended by <a href=\"https://github.com/jondot/awesome-react-native\">Awesome React Native</a></strong></p>\n<blockquote>\n<p>NativeBase added into the list of <a href=\"https://github.com/jondot/awesome-react-native#frameworks\">Frameworks</a> of Awesome React Native and are also used by many other React lovers across the world.</p>\n</blockquote>\n<h2 id=\"4-getting-started\" class=\"deep-link\"><a href=\"#4-getting-started\">4. Getting Started</a></h2>\n<p><strong>a. Setup with pure React Native app</strong></p>\n<p><em>Install NativeBase</em></p>\n<div class=\"highlight highlight-source-js\"><pre>npm install native<span class=\"pl-k\">-</span>base <span class=\"pl-k\">--</span>save</pre></div>\n<p><em>Install Peer Dependencies</em><br>\nThe peer dependencies included from any npm packages does not automatically get installed. Your application will not depend on it explicitly.</p>\n<div class=\"highlight highlight-source-js\"><pre>react<span class=\"pl-k\">-</span>native link</pre></div>\n<p>You&apos;ve successfully setup <a href=\"https://nativebase.io/\" rel=\"nofollow\">NativeBase</a> with your <a href=\"https://facebook.github.io/react-native/\" rel=\"nofollow\">React Native</a> app. Your React Native app is now all set to run on iOS and Android simulator.</p>\n<p><strong>b. Setup with CRNA</strong></p>\n<p><em>Create React Native project using the CRNA cli.</em> <br>\nCRNA helps you make React Native apps with no build configuration. Create React App works on macOS, Windows, and Linux. <br>\nRefer this link for additional information <a href=\"https://github.com/react-community/create-react-native-app\">CRNA</a></p>\n<p><em>Install NativeBase</em></p>\n<div class=\"highlight highlight-source-js\"><pre>npm install native<span class=\"pl-k\">-</span>base <span class=\"pl-k\">--</span>save</pre></div>\n<p><em>Install @expo/vector-icons</em></p>\n<div class=\"highlight highlight-source-js\"><pre>npm install @expo<span class=\"pl-k\">/</span>vector<span class=\"pl-k\">-</span>icons <span class=\"pl-k\">--</span>save</pre></div>\n<br>\n<p><strong>Note</strong> <br>\n<a href=\"https://nativebase.io/\" rel=\"nofollow\">NativeBase</a> uses some custom fonts that can be loaded using <strong>loadAsync</strong> function. Check out <a href=\"https://docs.expo.io/versions/v15.0.0/sdk/font.html#expofontloadasyncname-url\" rel=\"nofollow\">this</a> expo link.\n<br>\nSyntax <br></p>\n<div class=\"highlight highlight-source-js\"><pre><span class=\"pl-k\">async</span> <span class=\"pl-en\">componentWillMount</span>() {\n      <span class=\"pl-k\">await</span> <span class=\"pl-smi\">Expo</span>.<span class=\"pl-smi\">Font</span>.<span class=\"pl-en\">loadAsync</span>({\n        <span class=\"pl-s\"><span class=\"pl-pds\">&apos;</span>Roboto<span class=\"pl-pds\">&apos;</span></span><span class=\"pl-k\">:</span> <span class=\"pl-c1\">require</span>(<span class=\"pl-s\"><span class=\"pl-pds\">&apos;</span>native-base/Fonts/Roboto.ttf<span class=\"pl-pds\">&apos;</span></span>),\n        <span class=\"pl-s\"><span class=\"pl-pds\">&apos;</span>Roboto_medium<span class=\"pl-pds\">&apos;</span></span><span class=\"pl-k\">:</span> <span class=\"pl-c1\">require</span>(<span class=\"pl-s\"><span class=\"pl-pds\">&apos;</span>native-base/Fonts/Roboto_medium.ttf<span class=\"pl-pds\">&apos;</span></span>),\n        <span class=\"pl-s\"><span class=\"pl-pds\">&apos;</span>Ionicons<span class=\"pl-pds\">&apos;</span></span><span class=\"pl-k\">:</span> <span class=\"pl-c1\">require</span>(<span class=\"pl-s\"><span class=\"pl-pds\">&apos;</span>@expo/vector-icons/fonts/Ionicons.ttf<span class=\"pl-pds\">&apos;</span></span>),\n      });</pre></div>\n<br>\n<p>Check out the <a href=\"https://expo.io/@geekyants/nativebasekitchensink\" rel=\"nofollow\">KitchenSink</a> with CRNA for an example of the implementation.<br>\nFind the <a href=\"https://github.com/GeekyAnts/NativeBase-KitchenSink/tree/CRNA\">KitchenSink repo here</a></p>\n<h2 id=\"5-components\" class=\"deep-link\"><a href=\"#5-components\">5. Components</a></h2>\n<p><a href=\"https://nativebase.io/\" rel=\"nofollow\">NativeBase</a> is made from effective building blocks referred to as components. The Components are constructed in pure <a href=\"https://github.com/facebook/react-native\">React Native</a> platform along with some JavaScript functionality with rich set of customisable properties. These components allow you to quickly build the perfect interface.</p>\n<h2 id=\"6-compatibility-versions\" class=\"deep-link\"><a href=\"#6-compatibility-versions\">6. Compatibility Versions</a></h2>\n<table>\n<thead>\n<tr>\n<th>NativeBase</th>\n<th>React Native</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v0.1.1</td>\n<td>v0.22 to v0.23</td>\n</tr>\n<tr>\n<td>v0.2.0 to v0.3.1</td>\n<td>v0.24 to v0.25</td>\n</tr>\n<tr>\n<td>v0.4.6 to v0.4.9</td>\n<td>v0.26.0 - v0.27.1</td>\n</tr>\n<tr>\n<td>v0.5.0 to v0.5.15</td>\n<td>v0.26.0 - v0.37.0</td>\n</tr>\n<tr>\n<td>v0.5.16 to v0.5.20</td>\n<td>v0.38.0 - v0.39.0</td>\n</tr>\n<tr>\n<td>v2.0.0-alpha1 to v2.1.3</td>\n<td>v0.38.0 to v0.43.0</td>\n</tr>\n<tr>\n<td>v2.1.4 to v2.1.5</td>\n<td>v0.44.0 to v0.45.0</td>\n</tr>\n<tr>\n<td>v2.2.0</td>\n<td>v0.44.0 to v0.45.0</td>\n</tr>\n<tr>\n<td>v2.2.1</td>\n<td>v0.46.0 and above</td>\n</tr>\n<tr>\n<td>v2.3.0</td>\n<td>v0.46.0 and above <em>(does not support React 16.0.0-alpha.13)</em></td>\n</tr></tbody></table>\n<h2>7. <a href=\"https://github.com/start-react/native-starter-kit\">Native Starter Kit</a> Deprecated</h2>\n<p>A simple starter project for <a href=\"https://github.com/facebook/react-native\">React Native</a> + <a href=\"https://nativebase.io/\" rel=\"nofollow\">NativeBase</a> + <a href=\"http://redux.js.org/\" rel=\"nofollow\">Redux</a> + <a href=\"https://github.com/Microsoft/react-native-code-push\">CodePush</a> + <a href=\"https://facebook.github.io/react-native/docs/navigator.html\" rel=\"nofollow\">React Native Navigator</a> apps on iOS and Android.\n<a href=\"https://github.com/start-react/native-starter-kit#screens\">Take a look at the demo</a></p>\n<h2 id=\"8-nativebase-market\" class=\"deep-link\"><a href=\"#8-nativebase-market\">8. NativeBase Market</a></h2>\n<p>Having tried with the free version, <a href=\"https://github.com/start-react/native-starter-kit\">Native Starter Kit</a> and appreciate our product?</p>\n<p>Get on the mobile fast track with the featured apps of <a href=\"https://nativebase.io/\" rel=\"nofollow\">NativeBase</a>, to build high-quality iOS and Android mobile apps.<br>\nA <a href=\"https://market.nativebase.io/\" rel=\"nofollow\">marketplace</a> for premium React Native app themes to build high-quality iOS and Android mobile apps. <br></p>\n<h2 id=\"9-documentation\" class=\"deep-link\"><a href=\"#9-documentation\">9. Documentation</a></h2>\n<p>Go through <a href=\"https://docs.nativebase.io/\" rel=\"nofollow\">NativeBase Docs</a> to play with <a href=\"https://nativebase.io/\" rel=\"nofollow\">NativeBase</a>.</p>\n<h2 id=\"10-website\" class=\"deep-link\"><a href=\"#10-website\">10. Website</a></h2>\n<p><a href=\"https://nativebase.io/\" rel=\"nofollow\">https://nativebase.io/</a></p>\n<h2 id=\"11-quick-links-to-nativebase\" class=\"deep-link\"><a href=\"#11-quick-links-to-nativebase\">11. Quick Links to NativeBase</a></h2>\n<ul>\n<li><a href=\"https://docs.nativebase.io/\" rel=\"nofollow\">NativeBase Documentation</a></li>\n<li><a href=\"https://blog.nativebase.io\" rel=\"nofollow\">NativeBase Blog</a></li>\n<li><a href=\"https://twitter.com/NativeBaseIO\" rel=\"nofollow\">NativeBase on Twitter</a></li>\n<li><a href=\"https://www.facebook.com/nativebaseio/\" rel=\"nofollow\">NativeBase on FaceBook</a></li>\n</ul>\n<h2 id=\"12-about-the-creators\" class=\"deep-link\"><a href=\"#12-about-the-creators\">12. About the creators</a></h2>\n<p>We are <a href=\"https://geekyants.com/\" rel=\"nofollow\">GeekyAnts</a>, a startup based in Bangalore, India with 50+ developers in strength. We have been very active in the React / React Native community where we have developed <a href=\"https://www.strapui.com/\" rel=\"nofollow\">StrapUI</a> and <a href=\"https://startreact.com/\" rel=\"nofollow\">StartReact</a>. Our other products include <a href=\"http://startlaravel.com\" rel=\"nofollow\">StartLaravel</a> and <a href=\"http://startangular.com\" rel=\"nofollow\">StartAngular</a>.</p>\n</article></div>";
    const { classes } = this.props;
    return (
      <div
        dangerouslySetInnerHTML={{ __html: readme }}
        className={classes.container}
      />
    );
  }
}

export default withStyles(styles)(ReadMe);

