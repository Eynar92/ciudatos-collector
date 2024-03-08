import { StatsCards } from './StatsCards';

export const Stats = () => {
    return (
        <section className='w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
            <StatsCards />
            <StatsCards />
            <StatsCards />
            <StatsCards />
        </section>
    )
}
