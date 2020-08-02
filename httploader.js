function load(dom, url, source_dom=false)
{
    let body = document.getElementsByTagName("body")[0];
    let xml_http = new XMLHttpRequest(), content, content_process, start;
    xml_http.onreadystatechange = function()
    {
        if (xml_http.readyState === 4 && xml_http.status === 200)
        {
            content = xml_http.responseText;
            if(source_dom)
            {
                try
                {
                    document.getElementById("content_process").remove();
                }
                catch
                {
                    console.debug("No content process found.")
                }
                content_process = document.createElement("div"),
                content_process.innerHTML = content,
                content_process.id = "content_process",
                content_process.style.display = "none",
                body.appendChild(content_process),
                content = document.querySelector("#content_process " + source_dom).outerHTML
            }
            dom.innerHTML = content;
        }
    };
    start = new Date().getTime();
    xml_http.open("GET", url, true);
    xml_http.send(null);
}
