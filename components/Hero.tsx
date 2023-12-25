import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">กำลังสร้าง มองข้ามไปก่อน</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[900px]">
        One day a rabbit was boasting about how fast he could run. He was laughing at the turtle for being so slow. Much to the rabbit’s surprise, the turtle challenged him to a race. The rabbit thought this was a good joke and accepted the challenge. The fox was to be the umpire of the race. As the race began, the rabbit raced way ahead of the turtle, just like everyone thought.

The rabbit got to the halfway point and could not see the turtle anywhere. He was hot and tired and decided to stop and take a short nap. Even if the turtle passed him, he would be able to race to the finish line ahead of him. All this time the turtle kept walking step by step by step. He never quit no matter how hot or tired he got. He just kept going.

However, the rabbit slept longer than he had thought and woke up. He could not see the turtle anywhere! He went at full speed to the finish line but found the turtle there waiting for him.
        </p>
      </div>
    </section>
  )
}

export default Hero