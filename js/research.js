function toggleProject() {

    var researchContent = document.getElementById("research-content");
    researchContent.innerHTML = '<div class="res-text">\n' +
        '\t\t\t\t\t<ol>\n' +
        '\t\t\t\t\t\t<h4>A Decentralized Scheduling Solution for Serverless Edge Computing</h4><br>\n' +
        '\t\t\t\t\t\t<p>\n' +
        '\t\t\t\t\t\t\tServerless Edge Computing is a distributed computing model that combines serverless computing and edge computing to process data closer to the source, reducing latency and improving performance.\n' +
        '\t\t\t\t\t\t\tCurrent solutions employ a centralized scheduling approach to schedule functions on the nodes. This can become a bottleneck and increase the overall deployment latency.\n' +
        '\t\t\t\t\t\t\tOur project aims to eliminate the centralized bottleneck by employing many decentralized schedulers which schedule the serverless workloads autonomously. We leverage several technologies including\n' +
        '\t\t\t\t\t\t\tPeer-to-Peer DHT based overlays and docker container to build the solution.\n' +
        '\t\t\t\t\t\t</p>\n' +
        '\t\t\t\t\t</ol>\n' +
        '\t\t\t\t\t<br>\n' +
        '\t\t\t\t\t<ol>\n' +
        '\t\t\t\t\t\t<h4>A Distributed Key-Value Store for Serverless Edge Computing</h4><br>\n' +
        '\t\t\t\t\t\t<p>\n' +
        '\t\t\t\t\t\t\tServerless Edge Computing is a distributed computing model that combines serverless computing and edge computing to process data closer to the source, reducing latency and improving performance.\n' +
        '\t\t\t\t\t\t\tEdge nodes are typically distributed geographically far from each other. Serverless platforms depend on remote cloud to fetch the data required to deploy the function. However, in an edge environment\n' +
        '\t\t\t\t\t\t\tthis is not ideal as it increases the start-up latency. Our project aims to introduce a novel distributed key-value store for serverless edge computing. The datastore is deployed in such a way that the\n' +
        '\t\t\t\t\t\t\tfunction is invoked as close to the data achieving data locality. We leverage DHT based Peer-to-Peer overlays along with distributed storage solution to build the solution.\n' +
        '\t\t\t\t\t\t</p>\n' +
        '\t\t\t\t\t</ol>\n' +
        '\t\t\t\t</div>'
    var researchProject = document.getElementById("research-project");
    researchProject.style.scale = "1.2";
    researchProject.style.color ="#ef664d"

    var researchActivity = document.getElementById("research-activity");
    researchActivity.style.scale = "1";
    researchActivity.style.color ="black"

    var researchPublication = document.getElementById("research-publication");
    researchPublication.style.scale = "1";
    researchPublication.style.color ="black"

}

function toggleActivity() {
    var researchContent = document.getElementById("research-content");
    researchContent.innerHTML = '<div class="res-text">\n' +
        '\t\t\t\t\t<ul>\n' +
        '\t\t\t\t\t\t<li><b>April 2023:</b> Finished experiments for serverless distributed key-value store.</li>\n' +
        '\t\t\t\t\t\t<li><b>March 2023:</b> Submitted serverless scheduling work to SOSP 2023.</li>\n' +
        '\t\t\t\t\t\t<li><b>February 2023:</b> Finished implementation of serverless distributed key-value store.</li>\n' +
        '\t\t\t\t\t\t<li><b>December 2022:</b> Finished the design for serverless distributed key-value store project.</li>\n' +
        '\t\t\t\t\t\t<li><b>August 2022:</b> Finished experiments for serverless scheduling project.</li>\n' +
        '\t\t\t\t\t\t<li><b>May 2022:</b> Joined as software engineering intern in Microsoft, Redmond</li>\n' +
        '\t\t\t\t\t\t<li><b>January 2022:</b> Formulated experiments for the serverless scheduling project.</li>\n' +
        '\t\t\t\t\t\t<li><b>November 2021:</b> Started working as Graduate Research Assistant in ELVES lab.</li>\n' +
        '\t\t\t\t\t\t<li><b>October 2021:</b> Joined ELVES lab led by Dr. Liting Hu.</li>\n' +
        '\t\t\t\t\t\t<li><b>August 2021:</b> Joined Virgina Tech as a Masters student in Computer Science department.</li>\n' +
        '\t\t\t\t\t</ul>\n' +
        '\t\t\t\t</div>'

    var researchProject = document.getElementById("research-project");
    researchProject.style.scale = "1";
    researchProject.style.color = "black"

    var researchActivity = document.getElementById("research-activity");
    researchActivity.style.scale = "1.2";
    researchActivity.style.color ="#ef664d"

    var researchPublication = document.getElementById("research-publication");
    researchPublication.style.scale = "1";
    researchPublication.style.color ="black"

}

function togglePublication() {
    var researchContent = document.getElementById("research-content");
    researchContent.innerHTML = '<div class="res-text">\n' +
        '\t\t\t\t\t<ul>\n' +
        '\t\t\t\t\t\t<li>Planning to submit serverless distributed key-value store work to SoCC 2023.</li>\n' +
        '\t\t\t\t\t\t<li>Submitted the serverless scheduling work to SOSP 2023.</li>\n' +
        '\t\t\t\t\t</ul>\n' +
        '\t\t\t\t\t<p><b>Note:</b> The works are not published yet.</p>\n' +
        '\t\t\t\t</div>'

    var researchProject = document.getElementById("research-project");
    researchProject.style.scale = "1";
    researchProject.style.color = "black"

    var researchActivity = document.getElementById("research-activity");
    researchActivity.style.scale = "1";
    researchActivity.style.color ="black"

    var researchPublication = document.getElementById("research-publication");
    researchPublication.style.scale = "1.2";
    researchPublication.style.color ="#ef664d"

}