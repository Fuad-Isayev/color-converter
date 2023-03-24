<template>
    <div style="display: flex">
        <label :for="color">{{ color[0].toUpperCase() }}</label>
        <input :ref="color" class="color-input" :class="isMobile ? 'mobile' : ''" :value="value"
            @input="$emit('input', $event.target.value)" type="text" :id="color" min="0" :max="max || 255"
            :maxlength="maxLength || 3">
        <div class="increment-buttons" :class="isMobile ? 'mobile' : ''">
            <div @click="increment()" @mousedown="startIncrement" @touchstart="startIncrement" @mouseup="stopIncrement"
                @touchend="stopIncrement" @mouseleave="stopIncrement" class="button increment"
                :class="isMobile ? 'mobile' : ''">
                <div class="arrow arrow-up" :class="isMobile ? 'mobile' : ''">
                </div>
            </div>
            <div @click="decrement()" @mousedown="startDecrement" @touchstart="startDecrement" @mouseup="stopIncrement"
                @touchend="stopIncrement" @mouseleave="stopIncrement" class="button decrement"
                :class="isMobile ? 'mobile' : ''">
                <div class="arrow arrow-down" :class="isMobile ? 'mobile' : ''">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Color-Input",
    props: {
        color: String,
        max: String,
        maxLength: String,
        value: [Number, String],
    },
    data() {
        return {
            intervalId: null,
            timeOutId: null,
        }
    },
    computed: {
        inputValue() {
            let value = this.$refs[this.color].value;
            return value;
        },
        isMobile() {
            return this.$store.getters.isMobile;
        }
    },
    methods: {
        startIncrement() {
            this.timeOutId = setTimeout(() => {
                this.intervalId = setInterval(this.increment, 100);
            }, 300);
        },
        startDecrement() {
            this.timeOutId = setTimeout(() => {
                this.intervalId = setInterval(this.decrement, 100);
            }, 300);
        },
        stopIncrement() {
            clearInterval(this.intervalId);
            clearTimeout(this.timeOutId);
        },
        increment() {
            let incremention = this.color === 'alpha' ? 0.01 : 1;
            if (this.value < this.$refs[this.color].max) {
                let value = +this.value + incremention;
                value = this.color === 'alpha' ? value.toFixed(2) : value;
                this.$emit('input', value + '');
            }
        },
        decrement() {
            let decremention = this.color === 'alpha' ? 0.01 : 1;
            if (this.value > 0) {
                let value = +this.value - decremention;
                value = this.color === 'alpha' ? value.toFixed(2) : value;
                this.$emit('input', value + '')
            }
        }
    }
}
</script>

<style lang="scss">
.color-input {
    width: 80px;
    height: 50px;
    font-size: 24px;
    padding: 0 0 0 10px;
    margin: 50px 0;

    &:hover {
        &+.increment-buttons {
            visibility: visible;
        }
    }

    &.mobile {
        margin: 20px 0;
    }
}

label {
    margin: 0 12px 0 25px;
    font-size: 20px;
    align-self: center;
}

.increment-buttons {
    width: 19px;
    height: 42px;
    padding: 0;
    margin: 0;
    margin-left: -24px;
    align-self: center;
    visibility: hidden;
    // background: rgba(0, 255, 255, 0.285);

    &:hover {
        visibility: visible;
    }

    &.mobile {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 150px;
        height: 50px;
        margin-left: 20px;
        visibility: visible;
    }
}

.button {
    background: #00000010;
    width: 19px;
    height: 20px;
    padding: 0;
    margin: 0;
    position: relative;
    cursor: pointer;

    &:hover {
        background: #00000030;
    }

    &.increment {
        margin-bottom: 2px;
    }

    &.mobile {
        // background: rgba(255, 192, 203, 0.296);
        margin-left: 10px;
        width: 48px;
        height: 48px;

        &.decrement {
            margin-left: 20px;
        }
    }
}

.arrow {
    width: 5px;
    height: 5px;
    margin: 0 auto;
    border: 0 solid black;
    transform: rotateZ(45deg);
    position: absolute;
    left: 5.7px;

    &.arrow-up {
        border-width: 3px 0 0 3px;
        top: 7px;
    }

    &.arrow-down {
        border-width: 0 3px 3px 0;
        bottom: 7px;
    }

    &.mobile {
        width: 20px;
        height: 20px;
        position: static;

        &.arrow-up {
            margin-top: 18px;
            height: 15px;
            width: 15px;
            border-width: 6px 0 0 6px;

        }

        &.arrow-down {
            height: 15px;
            width: 15px;
            margin-top: 8px;
            border-width: 0 6px 6px 0;
        }
    }
}
</style>
