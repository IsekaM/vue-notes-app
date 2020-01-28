<template>
  <header class="header">
    <div class="header__nav">
      <div class="header__nav-burger">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22.213"
          height="15.809"
          viewBox="0 0 22.213 15.809"
        >
          <g transform="translate(1.5 1.5)">
            <path
              d="M4395,74h19.213"
              transform="translate(-4395 -74)"
              fill="none"
              stroke="#2d3142"
              stroke-linecap="round"
              stroke-width="3"
            />
            <path
              d="M4395,74h19.213"
              transform="translate(-4395 -67.596)"
              fill="none"
              stroke="#2d3142"
              stroke-linecap="round"
              stroke-width="3"
            />
            <path
              d="M4395,74h19.213"
              transform="translate(-4395 -61.192)"
              fill="none"
              stroke="#2d3142"
              stroke-linecap="round"
              stroke-width="3"
            />
          </g>
        </svg>
      </div>
      <div class="header__nav-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64.96"
          height="29.696"
          viewBox="0 0 64.96 29.696"
        >
          <path
            d="M16.192,0h6.3L13.632-12.864l8.832-9.824H15.808L7.52-13.152v-9.536H2.464V0H7.52V-6.08l2.56-2.848ZM27.264-9.856a3.03,3.03,0,0,1,3.168-2.688,2.852,2.852,0,0,1,3.2,2.688Zm6.72,4.128a3.072,3.072,0,0,1-3.2,2.08A3.442,3.442,0,0,1,27.168-6.72H38.24a10.151,10.151,0,0,0,.1-1.5c0-5.12-3.04-8.16-7.968-8.16A8.023,8.023,0,0,0,22.432-8,8.1,8.1,0,0,0,30.72.48c4.032,0,6.56-2.3,7.328-5.056ZM46.368,0V-15.9H41.5V0Zm-5.28-20.768A2.848,2.848,0,0,0,43.9-17.92a2.861,2.861,0,0,0,2.88-2.848,2.861,2.861,0,0,0-2.88-2.848A2.848,2.848,0,0,0,41.088-20.768ZM55.52,6.08V-1.248a5.59,5.59,0,0,0,4.32,1.6c4.448,0,7.584-3.488,7.584-8.352,0-4.768-2.784-8.288-7.392-8.288a5.657,5.657,0,0,0-4.672,2.016V-15.9h-4.7V6.08ZM62.656-7.968C62.656-5.312,60.96-4,59.04-4c-1.888,0-3.584-1.344-3.584-3.968,0-2.656,1.7-3.936,3.584-3.936C60.96-11.9,62.656-10.624,62.656-7.968Z"
            transform="translate(-2.464 23.616)"
            fill="#2d3142"
          />
        </svg>
      </div>
    </div>

    <div class="header__search">
      <input
        type="text"
        id="header__search-input"
        class="header__search-input"
        placeholder="Search for note..."
      />
    </div>

    <div class="header__button">
      <button
        class="header__button-add btn btn--yellow"
        id="header__button-add"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16.25"
            height="16.25"
            viewBox="0 0 16.25 16.25"
          >
            <g transform="translate(0.125 0.125)">
              <path
                d="M8.889,16.889h6.222v6.222a.889.889,0,0,0,1.778,0V16.889h6.222a.889.889,0,0,0,0-1.778H16.889V8.889a.889.889,0,1,0-1.778,0v6.222H8.889a.889.889,0,1,0,0,1.778Z"
                transform="translate(-8 -8)"
                fill="#2d3142"
                stroke="#2d3142"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0.25"
              />
            </g>
          </svg>
        </span>
        <span>Add Task</span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>
