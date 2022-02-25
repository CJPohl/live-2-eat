import React, { useState } from "react";

import { ProfileFood } from "./ProfileFood";
import { ProfileSettings } from "./ProfileSettings";

export const OtherProfileTabSelector = () => {


    return (
        <div>
            <section className="flex flex-col gap-5 py-10 text-xl lg:text-2xl ">
                <div className="">
                    <h3>Posts</h3>
                </div>
                <div className="border-t-2 text-slate-400"></div>
            </section>
            <section>
                Lots and Lots of posts
            </section>
        </div>
    );
}