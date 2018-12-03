let app = document.querySelector('#appCont');
	let newPorject = document.querySelector('#newPorject');
	let projects = document.querySelector('#projects');
	let createProject = document.querySelector('.createBtn');
	let cancelNewProject = document.querySelector('.createBtnCancel');
	cancelNewProject.addEventListener('click', function() {
		document.querySelector("#newInput").value='';});

			
	createProject.addEventListener('click', function() { 	
		let inputValue = document.querySelector("#newInput").value; 
		let projectName = document.createTextNode(inputValue);
		if (inputValue === '') {
    alert("Enter project name.");
  } else {
		let div = document.createElement('div');
		
		div.className = "project";
		div.appendChild(projectName);
		projects.appendChild(div);



		let deleteButton=document.createElement("div");
		deleteButton.className="deleteBtn";
		div.appendChild(deleteButton);

		let deleteProject = function(){		
			let projectItem=this.parentNode;
			let div=projectItem.parentNode;
			div.removeChild(projectItem);}
		deleteButton.onclick=deleteProject;

		let project = document.querySelector('.project');
		let ul = document.createElement('ul');
			ul.className="taskList";
		let inputTask = document.createElement('input');
				inputTask.type="text";
				inputTask.placeholder="Enter task name";
				inputTask.className="inputTask";
		let inputTaskBtn = document.createElement('button');
				inputTaskBtn.innerText="Save";
				inputTaskBtn.className="addTask";

		div.appendChild(ul);
		div.appendChild(inputTask);
		div.appendChild(inputTaskBtn);
		document.querySelector("#newInput").value='';

		// let addTaskItem=document.querySelector('.addTask');
		var addTaskItem = document.getElementsByClassName("addTask");
var i;
for (i = 0; i < addTaskItem.length; i++) {
  addTaskItem[i].onclick = function() {
				let taskList = document.querySelector('.taskList')
				let li = document.createElement('li');
				let checkBox=document.createElement("input");
				checkBox.type="checkbox";
				li.appendChild(checkBox);				
				let checkTask = function() {		
					let taskItem=this.parentNode;
					let li=taskItem.parentNode;
					taskItem.classList.toggle('checked');
					taskItem.querySelector('.commentArea').classList.toggle('disable');
					taskItem.querySelector('.deadlineSelect').classList.toggle('disable');
					taskItem.querySelector('.deadlineCont').classList.toggle('disable');
					}
				checkBox.onclick=checkTask;


				li.className="task";

				let inputTaskValue = this.parentNode.querySelector(".inputTask").value;
				let taskName = document.createTextNode(inputTaskValue);
				if (inputTaskValue === '') {
    			alert("Enter task name.");
  				} else {
  					let taskItem=this.parentNode;
				li.appendChild(taskName);
				taskItem.appendChild(li);

				let commentBtn = document.createElement("div");
				commentBtn.className="commentBtn";
				li.appendChild(commentBtn);
				let openComment = function() {				
				let projectItem=this.parentNode;
				let li=projectItem.parentNode;
				projectItem.querySelector('.commentArea').classList.toggle('disabled');
				projectItem.querySelector('.commentArea').classList.toggle('enable');}
				commentBtn.onclick=openComment;

				let deadlineBtn = document.createElement("div");
				deadlineBtn.className="deadlineBtn";
				li.appendChild(deadlineBtn);
				let openDeadline = function() {				
				let projectItem=this.parentNode;
				let li=projectItem.parentNode;
				projectItem.querySelector('.deadlineSelect').classList.toggle('disabled');
				projectItem.querySelector('.deadlineSelect').classList.toggle('enable');}
				deadlineBtn.onclick=openDeadline;


				let deleteTaskButton=document.createElement("div");
				deleteTaskButton.className="deleteBtn";
				li.appendChild(deleteTaskButton);
				let deleteTask = function(){		
				let projectItem=this.parentNode;
				let li=projectItem.parentNode;
				li.removeChild(projectItem);}
				deleteTaskButton.onclick=deleteTask;
				this.parentNode.querySelector(".inputTask").value='';

				let commentArea = document.createElement('div');
					commentArea.className="commentArea disabled";
					commentArea.innerText='Add comment';
					li.appendChild(commentArea);
					let addComment = document.createElement('textarea');
						addComment.rows='4';
						addComment.cols='50';
						addComment.className="addComment";
						commentArea.appendChild(addComment);
						let commentSave = document.createElement('button');
						commentSave.innerText="Save";
						commentArea.appendChild(commentSave);
						commentSave.addEventListener('click', function () {



							let commentItem=this.parentNode;
							let comentValue = commentItem.querySelector('.addComment').value;
							let cTxt = document.createTextNode(comentValue);
							if (comentValue === '') {
    						alert("Enter comment.");
  							} else {
  							let comment = document.createElement('div');
							comment.className="comment";
							commentArea.appendChild(comment);
							let today = new Date();
							let dd = today.getDate();
							let mm = today.getMonth()+1; 
							let yyyy = today.getFullYear();
								if(dd<10) {
									dd = '0'+dd} 
								if(mm<10) {
									mm = '0'+mm} 
								today = dd + '/' + mm + '/' + yyyy;
							let cDate = document.createTextNode(today);
							comment.appendChild(cDate);
							let deleteCommentButton=document.createElement("div");
							deleteButton.className="deleteBtn";
							comment.appendChild(deleteButton);
							let deleteComment = function(){		
								let projectItem=this.parentNode;
								let li=projectItem.parentNode;
								li.removeChild(projectItem);}
							deleteCommentButton.onclick=deleteComment;
							let commentTxt = document.createElement('div');
							commentTxt.className="commentTxt";
							comment.appendChild(commentTxt);
							commentTxt.appendChild(cTxt);
							document.querySelector('.addComment').value='';
							}});

						let commentCancel = document.createElement('button');
						commentCancel.innerText="Cancel";
						commentArea.appendChild(commentCancel);
						commentCancel.addEventListener('click', function() {document.querySelector('.addComment').value='';})

				let deadlineSelect = document.createElement('div');
					deadlineSelect.className="deadlineSelect disabled";
					deadlineSelect.innerText="Deadline";					
					li.appendChild(deadlineSelect);
					let deadlineDate = document.createElement('input');
						deadlineDate.setAttribute('type','date');
						deadlineDate.setAttribute('min','2018-01-01');
						deadlineDate.setAttribute('max','2024-12-31');
						deadlineDate.setAttribute('class','deadlineDate');
						deadlineSelect.appendChild(deadlineDate);
					let deadlineTime = document.createElement('input');
						deadlineTime.setAttribute('type','time');
						deadlineTime.setAttribute('class','deadlineTime');
						deadlineSelect.appendChild(deadlineTime);
				let deadlineSave = document.createElement('button');
					deadlineSave.innerText="Save";
					deadlineSelect.appendChild(deadlineSave);
					deadlineSave.addEventListener('click', function () {
						let deadlineContainer = document.createElement('div');
						deadlineContainer.className="deadlineCont";
						deadlineContainer.title="Deadline"
						let deadlineItem=this.parentNode;
						let deadlineDateValue = deadlineItem.querySelector('.deadlineDate').value;
						let deadlineTimeValue = deadlineItem.querySelector('.deadlineTime').value;
						let DLDate = document.createTextNode(deadlineDateValue);
						let s = document.createTextNode(' ');
						let DLTime = document.createTextNode(deadlineTimeValue);

						li.appendChild(deadlineContainer);
						deadlineContainer.appendChild(DLDate);
						deadlineContainer.appendChild(s);
						deadlineContainer.appendChild(DLTime);
						document.querySelector('.deadlineDate').value='';
						document.querySelector('.deadlineTime').value='';
						document.querySelector('.deadlineDate').disabled = true;
						document.querySelector('.deadlineTime').disabled = true;
						})
				let deadlineCancel = document.createElement('button');
					deadlineCancel.innerText="Cancel";
					deadlineSelect.appendChild(deadlineCancel);
					deadlineCancel.addEventListener('click', function() {
						document.querySelector('.deadlineDate').value='';
						document.querySelector('.deadlineTime').value='';})

			}};

	}} 
		});
	
