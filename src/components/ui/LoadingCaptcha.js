
function LoadingCaptcha() {
    return (
    <div class="border border-stone-600/100 shadow bg-neutral-200 rounded-lg px-3 py-5 max-w-sm w-[55%]">
        <div class="animate-pulse flex space-x-4">
            <div class="bg-slate-700 h-7 w-8 rounded-sm"></div>
            <div class="flex justify-between w-full">
                <div class="h-2 w-[40%] bg-slate-700 rounded self-center"></div>
            </div>
        </div>
    </div>
)};

export default LoadingCaptcha;