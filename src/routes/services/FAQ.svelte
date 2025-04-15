<script>
    import { _ } from "svelte-i18n";
    import { fade } from "svelte/transition";
    export let question = '';
    export let answer = '';
    let isOpen = false;
    function toggle() {
      isOpen = !isOpen;
    }
  </script>
  
  <div class="faq-item">
    <button 
      class="question" 
      on:click={toggle}
      aria-expanded={isOpen}
      aria-controls="answer-{question}"
    >
      <span>{question}</span>
      <svg 
        class="icon {isOpen ? 'open' : ''}" 
        viewBox="0 0 24 24" 
        width="24" 
        height="24"
      >
        <path d="M7 10l5 5 5-5z" />
      </svg>
    </button>
    
    {#if isOpen}
      <div 
        id="answer-{question}" 
        class="answer" 
        transition:fade={{duration:200}}
      >
        {@html answer}
      </div>
    {/if}
  </div>
  
  <style>
    .faq-item {
      border-bottom: 1px solid #eaeaea;
      margin-bottom: 0.5rem;
    }
    
    .question {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
      background: none;
      border: none;
      text-align: left;
      cursor: pointer;
      font-size: 1.1rem;
      font-weight: 600;
      color: #333;
    }
    
    .question:hover {
      color: #000;
    }
    
    .icon {
      transition: transform 0.3s ease;
      fill: currentColor;
    }
    
    .icon.open {
      transform: rotate(180deg);
    }
    
    .answer {
      padding-bottom: 1rem;
      line-height: 1.6;
      color: #666;
    }
  </style>