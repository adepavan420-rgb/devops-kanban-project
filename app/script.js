const columns = [
  ["backlog","Backlog",99],["todo","To Do",99],["progress","In Progress",3],
  ["review","Code Review",2],["testing","Testing",2],["blocked","Blocked",99],["done","Done",99]
];

const demoTasks = [
  ["Create GitHub repository","backlog"],
  ["Prepare project README","backlog"],
  ["Design Kanban UI","todo"],
  ["Create dashboard","todo"],
  ["Implement task movement","progress"],
  ["Create Jenkins pipeline","progress"],
  ["Review dashboard code","review"],
  ["Review Jenkinsfile","review"],
  ["Run UI smoke test","testing"],
  ["Fix responsive issue","testing"],
  ["Configure deployment","blocked"],
  ["Initial documentation","done"],
  ["Create project architecture","done"],
  ["Prepare viva questions","done"]
];

let tasks = demoTasks.map((x,i)=>({id:i+1,title:x[0],stage:x[1]}));

function showAlert(msg=""){document.getElementById("alert").textContent=msg}

function moveTask(id, direction){
  const task=tasks.find(t=>t.id===id);
  const index=columns.findIndex(c=>c[0]===task.stage);
  const next=index+direction;
  if(next<0 || next>=columns.length)return;
  const target=columns[next];
  const currentCount=tasks.filter(t=>t.stage===target[0]).length;
  if(currentCount>=target[2]){
    showAlert(`WIP limit reached for "${target[1]}". Finish existing work before adding another task.`);
    return;
  }
  task.stage=target[0];
  showAlert("");
  render();
}

function render(){
  const board=document.getElementById("board");
  board.innerHTML="";
  columns.forEach((col,index)=>{
    const [key,name,limit]=col;
    const list=tasks.filter(t=>t.stage===key);
    const isBottleneck=limit<99 && list.length>=limit;
    const section=document.createElement("section");
    section.className=`column ${key} ${isBottleneck?"bottleneck":""}`;
    section.innerHTML=`<div class="column-header"><h2>${name}</h2><span class="count">${list.length}${limit<99?"/"+limit:""}</span></div>
      ${isBottleneck?'<p class="bottleneck-note">⚠ WIP limit reached — possible bottleneck</p>':""}`;
    list.forEach(task=>{
      const card=document.createElement("article");
      card.className="task";
      card.innerHTML=`<strong>${escapeHtml(task.title)}</strong>
        <small>Task #${task.id}</small>
        ${key==="blocked"?'<span class="badge">BLOCKED</span>':""}
        <div class="task-actions">
          <button ${index===0?"disabled":""} data-id="${task.id}" data-dir="-1">← Move</button>
          <button ${index===columns.length-1?"disabled":""} data-id="${task.id}" data-dir="1">Move →</button>
        </div>`;
      section.appendChild(card);
    });
    board.appendChild(section);
  });

  document.querySelectorAll("[data-id]").forEach(btn=>{
    btn.addEventListener("click",()=>moveTask(Number(btn.dataset.id),Number(btn.dataset.dir)));
  });

  const total=tasks.length, completed=tasks.filter(t=>t.stage==="done").length;
  document.getElementById("total").textContent=total;
  document.getElementById("completed").textContent=completed;
  document.getElementById("blocked").textContent=tasks.filter(t=>t.stage==="blocked").length;
  document.getElementById("progress").textContent=total?Math.round(completed/total*100)+"%":"0%";
}

function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}

document.getElementById("taskForm").addEventListener("submit",e=>{
  e.preventDefault();
  const title=document.getElementById("taskTitle").value.trim();
  const stage=document.getElementById("taskStage").value;
  if(!title)return;
  const limit=columns.find(c=>c[0]===stage)[2];
  if(tasks.filter(t=>t.stage===stage).length>=limit){
    showAlert(`WIP limit reached for "${columns.find(c=>c[0]===stage)[1]}".`);
    return;
  }
  tasks.push({id:Math.max(0,...tasks.map(t=>t.id))+1,title,stage});
  e.target.reset(); showAlert(""); render();
});

document.getElementById("resetBtn").addEventListener("click",()=>{
  tasks=demoTasks.map((x,i)=>({id:i+1,title:x[0],stage:x[1]}));
  showAlert(""); render();
});

render();
