import React, { useEffect } from 'react'

export const List = () => {
    // useEffect(() => {
    //     effect
        
    // }, [input])

    return (
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Noe Horo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Kik Pepmeyer</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Kevin Kim</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Wyatt Marvil</td>
          </tr>
        </tbody>
      </table>
    )
}
