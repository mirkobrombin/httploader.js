/* https://github.com/mirkobrombin/httploader.js
 * 
 * Copyright (c) 2020 Mirko Brombin <send@mirko.pm>
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

function load(dom, url, source_dom=false)
{
    let body = document.getElementsByTagName("body")[0];
    let xml_http = new XMLHttpRequest(), content, content_process;
    xml_http.onreadystatechange = function()
    {
        if (xml_http.readyState === 4 && xml_http.status === 200)
        {
            content = xml_http.responseText;
            if(source_dom)
            {
                content_process = document.createElement("div"),
                content_process.innerHTML = content,
                content_process.id = "content_process",
                content_process.style.display = "none",
                content = content_process.querySelector(source_dom).outerHTML
            }
            dom.innerHTML = content;
        }
    };
    xml_http.open("GET", url, true);
    xml_http.send(null);
}
