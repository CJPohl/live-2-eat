import React from "react";

export const ProfileMoreInfo = ({profile}) => {
        // When x is clicked return to profile
        const returnProfile = () => {
            const profileAll = document.getElementById('profile-all');
            profileAll.classList.remove('-translate-x-full');

            const moreInfo = document.getElementById('more-info');
            setTimeout(() => moreInfo.classList.replace('flex', 'hidden'), 200);
        }

        const favoriteFoods = (!profile.favoriteFoods) ? 'No favorite foods yet' : profile.favoriteFoods.length;

    return (
        <section id='more-info' className="hidden absolute right-0 top-0 translate-x-full p-6 2xl:px-72 2xl:py-20 h-full w-full flex-col">
            <div className="relative fade-in bg-indigo-900 p-9 rounded shadow-xl flex flex-col gap-1 lg:gap-4 ">
                <button type="button" onClick={returnProfile} className="absolute top-3 right-4 flex items-center gap-3 bg-indigo-600 text-slate-300 text-md p-2 lg:text-lg rounded shadow">
                    <i className="fas fa-arrow-left"></i>
                </button>
                <h2>More Info</h2>
                <p>{profile.age}</p>
                {favoriteFoods}
                <p>{profile.height}</p>
                <p>{(profile.posts) ? profile.posts.length : 'No posts yet'}</p>
                <p>{profile.weight_change}</p>
                <p>{(profile.weight_goal_type==='lose') ? `${profile.first_name} is losing weight!` : `${profile.first_name} is bulking up!`}</p>
            </div>
        </section>
    );
}