export default function CardComponent({
  owner_first_name,
  image,
  owner_last_name,
}) {
  return (
    <div class="w-44 p-5 shadow rounded-md">
      <div class="flex flex-wrap w-full">
        <div class="flex flex-col w-full text-center rounded ">
          <div class="inline-block mb-4 relative shrink-0">
            <img
              class="inline-block shrink-0 w-44 h-44"
              src="https://clipground.com/images/happy-office-worker-clipart-1.jpg"
              alt="avarat image"
            />
            
          </div>
          <div class="text-center">
            <a
              href="javascript:void(0)"
              class="text-red-500 font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out"
            >
              {owner_first_name}
            </a>
            <span class="block font-sans font-medium text-muted text-black">
              {owner_last_name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
