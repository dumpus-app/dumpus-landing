<template>
    <article class="page markdown-body" style="user-select: none">
        <h1>FAQ - Frequently Asked Questions</h1>
        <h2 @click="toggleAnswer">How are statistics calculated?</h2>
        <p style="display: none">
            Thanks to the GPDR law in Europe, Discord is required to let you download all of your
            data. This data package contains all of your messages, servers, friends, etc. You can
            then import this data package into Dumpus and see your statistics. There is of course no
            way for us to access your data package and you can run the calculations locally as
            everything is open source. <br />
        </p>
        <h2 @click="toggleAnswer">How can I get my Discord Data Package?</h2>
        <p style="display: none">
            You can get your Discord Data Package by following these steps:<br />
            1. Open Discord on your phone or computer. <br />
            2. Go to the User Settings. <br />
            3. Go to the Privacy & Safety tab. <br />
            4. Scroll down to the bottom and click on "Request all of my Data". <br />
        </p>
        <h2 @click="toggleAnswer">Can I see my statistics before I receive my data package?</h2>
        <p style="display: none">
            You need to wait to receive your package. Discord may take up to 30 days to send you
            your data package. Once you receive it, you can upload it to Dumpus and see your
            statistics. <br />
        </p>
        <h2 @click="toggleAnswer">Is the app completely free?</h2>
        <p style="display: none">
            <b>TLDR; our app is free and has an optional premium version.</b><br /><br />
            We share our entire source code on GitHub along with instructions on how to build the
            app yourself (for both classic and premium versions). You can technically build the app
            yourself, and execute the window.setPremium(true) shortcut to bypass the Supporter
            payment. <br /><br />
            Please, only do this if you are using your own API server. If you are using our servers
            to make the calculations, consider supporting us by buying the Supporter version. <br />
        </p>
        <h2 @click="toggleAnswer">How can I be sure my data won't be stolen?</h2>
        <p style="display: none">
            As I said previously, we share our entire source code on GitHub. Any developer or geek
            should take the time to build their own API instance to make sure the data don't leave
            their devices.<br /><br />

            Netherless, even if you are using our free API server, we will <b>never</b> store or
            share your data on our servers. We took a lot of time to think about the best way to
            handle the packages, and we came up with a solution that does not allow admins to ever
            read the content of the packages. <br />
        </p>
        <h2 @click="toggleAnswer">My stats are incorrect or incomplete?</h2>
        <p style="display: none">
            This often happens for users who disabled Discord's tracking... "feature"?. You can see
            that in your Discord settings, under Privacy & Safety, and "Use data to improve
            Discord".
        </p>
        <h2 @click="toggleAnswer">I found an old package and the link expired, can I import it?</h2>
        <p style="display: none">
            TLDR; yes, but it's very complicated. <br /><br />Our app communicates with our API,
            that downloads your package from the link you entered and that does the analysis. As we
            want to prevent abuses and malicious uses of our API, the link has to be an official and
            not expired Discord package link. So... how to make it work?<br /><br />This is the
            workaround:<br /><br />* Create your own Dumpus API instance and expose it to a URL
            (using Ngrok would work)<br />* Host your package ZIP file somewhere (the hosting
            provider has to support direct downloads)<br />* Configure your Dumpus API instance to
            whitelist your hosting provider domain<br />* Configure the app to use your API URL as
            "Back-end URL"<br />* Enter the package link (given by your hosting provider) in the
            app<br /><br />This might be a bit difficult to understand, but if you are a developer,
            you should be able to do it. If you are not, we suggest you wait until you receive your
            new package link. <br />
        </p>
        <h2 @click="toggleAnswer">Why Dumpus?</h2>
        <p style="display: none">
            Wumpus is Discord's mascot, and a Data Dump is a file containing a large amount of data.
            We combined the two words to create Dumpus. <br />
        </p>
        <h2 @click="toggleAnswer">Do you have a Discord server?</h2>
        <p style="display: none">
            Yes, we have a Discord server. You can join it by clicking
            <a href="https://androz2091.fr/discord" target="_blank">here</a>. <br />
        </p>
    </article>
</template>

<style>
@import url('@/assets/css/legal/legal.css');
</style>

<script>
export default {
    name: 'Help',
    methods: {
        toggleAnswer(event) {
            event.target.nextElementSibling.style.display =
                event.target.nextElementSibling.style.display === 'none' ? 'block' : 'none';
        },
    },
};
</script>
