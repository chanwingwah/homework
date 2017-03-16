var Links = (document.getElementById('link')).getElementsByTagName('li');
var Main_content =document.getElementById('Main_content');
var HTMLArray = new Array();
	HTMLArray[0] = "<article><h2>Documentation bugs</h2><p>Python is a mature programming language which has established a reputation for stability. In order to maintain this reputation, the developers would like to know of any deficiencies you find in Python.</p> <p>It can be sometimes faster to fix bugs yourself and contribute patches to Python as it streamlines the process and involves less people. Learn how to contribute.</p></article>";
	HTMLArray[1] = "<article><h2>Documentation bugs</h2><p>If you find a bug in this documentation or would like to propose an improvement, please submit a bug report on the tracker. If you have a suggestion how to fix it, include that as well.</p><p>If you’re short on time, you can also email documentation bug reports to docs@python.org (behavioral bugs can be sent to python-list@python.org). ‘docs@’ is a mailing list run by volunteers; your request will be noticed, though it may take a while to be processed.</p></article>";
	HTMLArray[2] = "<article><h2>Getting started contributing to Python yourself</h2><p>Beyond just reporting bugs that you find, you are also welcome to submit patches to fix them. You can find more information on how to get started patching Python in the Python Developer’s Guide. If you have questions, the core-mentorship mailing list is a friendly place to get answers to any and all questions pertaining to the process of fixing issues in Python.</p></article>";

	// 切换事件绑定
		Main_content.innerHTML = HTMLArray[0]+HTMLArray[1]+HTMLArray[2];
		for (var i = 0; i < Links.length; i++) {
			Links[i].id = i;
			Links[i].onclick = function(){	
				Main_content.innerHTML = HTMLArray[this.id]+HTMLArray[this.id]+HTMLArray[this.id];
			}
		}

