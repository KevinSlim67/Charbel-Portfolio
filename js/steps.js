class StepsComponent {
    constructor(stepsSelector, contentsSelector) {
      this.current = 1;
      this.stepsNode = document.querySelector(stepsSelector);
      this.contentsNode = document.querySelector(contentsSelector);
  
      this.totalSteps = this.stepsNode.children.length;
  
      this.stepsNode.querySelectorAll("button").forEach((step) => {
        step.addEventListener("click", (e) => {
          const targetStep = parseInt(e.target.dataset.step);
  
          this.contentsNode
            .querySelectorAll(".content")
            .forEach((content) => content.classList.remove("active"));
          this.stepsNode
            .querySelectorAll("button")
            .forEach((content) => content.classList.remove("active"));
  
          this.contentsNode
            .querySelector(`.content[data-step="${targetStep}"]`)
            .classList.add("active");
          this.stepsNode
            .querySelector(`button[data-step="${targetStep}"]`)
            .classList.add("active");
          
          this.stepsNode
            .querySelectorAll("div")
            .forEach((content) => content.classList.remove("active"));
          if(targetStep - 1 > 0) {
            const num = targetStep - 1;
            for(let i = 1; i <= num; i++) {
              this.stepsNode.querySelector(`div:nth-of-type(${i})`).classList.add('active');
            }
          }
        });
      });
    }
  }
  
  new StepsComponent("#steps", "#contents");
  